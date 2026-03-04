const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// --- EMPORARY DATABASE ---
let websiteData = {
    captionOneP1: "",
    captionTwoP1: "", 
    captionThreeP1: "",

    captionOneP2: "",
    captionTwoP2: "", 
    captionThreeP2: "",

    captionOneP3: "",
    captionTwoP3: "", 
    captionThreeP3: "",

    captionOneP4: "",
    captionTwoP4: "", 
    captionThreeP4: "",

    captionOneP5: "",
    captionTwoP5: "", 
    captionThreeP5: "",

    captionOneP6: "",
    captionTwoP6: "",
    captionThreeP6: "",

    homenewstitle1: "",
    homenewsdesc1: "",
    homenewsdate1: "",

    homenewstitle2: "",
    homenewsdesc2: "",
    homenewsdate2: "",

    homenewstitle3: "",
    homenewsdesc3: "",
    homenewsdate3: "",

    homenewstitle4: "",
    homenewsdesc4: "",
    homenewsdate4: "",

    homenewstitle5: "",
    homenewsdesc5: "",
    homenewsdate5: "",

    totalCrew: "",
    onBoard: "",
    standBy: "",
    totalVessels: "",
    cfsimgdesc: "",

    
};












// =================ROUTE=================
// GET Request: Website asks for the text
app.get('/api/content', (req, res) => {
    console.log("Vue requested data. Sending:", websiteData);
    res.json(websiteData);
});

// POST Request: Admin Panel updates the text
app.post('/api/update', (req, res) => {
    const newData = req.body;
    console.log("Updating text to:", newData);
    
    // Merge new data
    websiteData = { ...websiteData, ...newData };
    
    res.json({ message: "Updated!", currentData: websiteData });
});

app.listen(3000, () => {
    console.log("🚀 Server is running. galing naman ni al");
});