/**
 * CMS Backend Server
 * Provides REST API endpoints for the website CMS admin panel.
 * - GET /api/content - Retrieves all website content
 * - POST /api/update - Updates website content
 * 
 * Note: Uses in-memory storage. Data resets on server restart.
 */

const express = require('express');
const cors = require('cors');

// Configuration
const app = express();
const PORT = 3000;
const MAX_UPLOAD_SIZE = '50mb';

// Middleware
app.use(express.json({ limit: MAX_UPLOAD_SIZE }));
app.use(express.urlencoded({ extended: true, limit: MAX_UPLOAD_SIZE }));
app.use(cors());

// In-memory database
let websiteData = {
  // Contact Information
  globenumber: "",
  smartnumber: "",
  faxnumber: "",
  pcc: "",
  bulk: "",
  docs: "",
  training: "",
  accounting: "",
  accounting2: "",
  execOffices: "",
  adminDept: "",

  // Job Openings
  showJobHiring: false,
  jobList: [],

  // Home Page Carousel - Key Visuals
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
  keyVisuals: {
    slide1: "",
    slide2: "",
    slide3: "",
    slide4: "",
    slide5: "",
    slide6: ""
  },

  // Crew and Fleet Status
  totalCrew: "",
  onBoard: "",
  standBy: "",
  totalVessels: "",
  cfsimgdesc: "",

  // News Articles
  newsArticles: [],

  // Membership Affiliations
  affiliates: [],

  // About Us Section
  TCdescription: "",
  whyVeritas: "",
  qualityCrewRecruitment: "",
  missionStatement: "",
  coreValuesHonesty: "",
  coreValuesIntegrity: "",
  coreValuesQualityService: "",
  history: "",

  // Our Principals Section
  opCompany1: "",
  opAddress1: "",
  opContactTel1: "",
  opContactFax1: "",
  opContent1: "",
  opCompany2: "",
  opAddress2: "",
  opContactTel2: "",
  opContactFax2: "",
  opContent2: "",
  opCompany3: "",
  opAddress3: "",
  opContactTel3: "",
  opContactFax3: "",
  opContent3: "",
  opCompany4: "",
  opAddress4: "",
  opContactTel4: "",
  opContactFax4: "",
  opContent4: "",

  // Schedule Image
  scheduleImage: { image: "" }
};

// Routes
app.get('/api/content', (req, res) => {
  console.log("Content requested. Sending data...");
  res.json(websiteData);
});

app.post('/api/update', (req, res) => {
  const newData = req.body;
  websiteData = { ...websiteData, ...newData };
  console.log("Content updated successfully.");
  res.json({ message: "Updated!", currentData: websiteData });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});