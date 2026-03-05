const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Import your model using the exact lowercase filename you created
const Content = require('./models/content');

const app = express();

// --- CONFIGURATION ---
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'super_secret_jwt_key_for_dev';

// --- CRITICAL CONFIGURATION ---
// Because you are uploading Base64 images and videos from your Vue CMS, 
// the default 100kb limit is way too small. We increase it to 50mb here!
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Enable CORS so your Vue app (running on a different port) can talk to this API
app.use(cors());

// --- MONGODB CONNECTION ---
const mongoURI = 'mongodb://127.0.0.1:27017/vmc_database';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    seedAuthorizedUsers(); // Seed the authorized users once connected
  })
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// --- 1. USER AUTHENTICATION SETUP ---

// Define the User Schema directly here for simplicity since accounts are hard-coded
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Plain text for now
  email: { type: String, required: true }     // Needed later for OTP
});

const User = mongoose.model('User', userSchema);

// --- HARDCODED AUTHORIZED USERS LIST ---
// Add or remove users from this list whenever you need to grant/revoke access.
// Since there is no sign-up page, this is your strict access control.
const authorizedUsers = [
  {
    username: 'admin',
    password: 'adminpassword123',
    email: 'admin@veritas.com.ph'
  },

];

// Automatically create these users in the database if they don't exist
async function seedAuthorizedUsers() {
  try {
    for (const userData of authorizedUsers) {
      const userExists = await User.findOne({ username: userData.username });
      
      if (!userExists) {
        await User.create(userData);
        console.log(`✅ Hard-coded account created for: ${userData.username}`);
      }
    }
    console.log('🔒 Authorized users check complete.');
  } catch (err) {
    console.error('❌ Error seeding users:', err);
  }
}

// --- 2. MIDDLEWARE (THE "BOUNCER") ---
// This function protects our routes by checking for a valid JWT token
const authenticateToken = (req, res, next) => {
  // The frontend should send the token in the "Authorization" header
  const authHeader = req.headers['authorization'];
  
  // Format is usually "Bearer eyJhbG...", so we split it to just get the token
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided!' });
  }

  // Verify if the token is real and hasn't expired
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Access Denied: Invalid or expired token!' });
    }
    
    // Token is good! Save the user info and let them pass to the route
    req.user = user;
    next();
  });
};

// --- API ROUTES ---

// 1. LOGIN route: Handles authentication from LoginPage.vue (Unprotected, anyone can try to log in)
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // A. Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // B. Check password (Plain text comparison for now)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // C. Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, username: user.username }, 
      JWT_SECRET, 
      { expiresIn: '8h' }
    );

    // D. Send token back to the frontend
    res.status(200).json({
      message: 'Login successful',
      token: token,
      user: { username: user.username, email: user.email }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// 2. GET route: Sends the data to your Vue app (UNPROTECTED)
app.get('/api/content', async (req, res) => {
    try {
        let contentDoc = await Content.findOne();
        if (!contentDoc) return res.json({});
        res.json(contentDoc.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});

// 3. POST route: Receives the data from Vue (Now PROTECTED by authenticateToken)
app.post('/api/update', authenticateToken, async (req, res) => {
    try {
        const incomingData = req.body;
        let contentDoc = await Content.findOne();

        if (!contentDoc) {
            contentDoc = new Content({ data: incomingData });
        } else {
            contentDoc.data = incomingData;
            contentDoc.markModified('data'); 
        }

        await contentDoc.save();
        res.status(200).json({ message: 'Content updated successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save content' });
    }
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});