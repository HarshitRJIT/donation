const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Form = require('./models/Form'); // Import the Form model
const Join = require('./models/Join'); // Import the Join model
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const URL = "mongodb+srv://sangathanbhartiyasamajkalyan:12345678Indian-social-welfare-organization@12345678indian-social-w.z7kpd.mongodb.net/?retryWrites=true&w=majority&appName=12345678Indian-social-welfare-organization";
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log("MongoDB Connection Error:", err));

  const corsOptions = {
    origin: "http://localhost:5173", // Adjust based on your frontend
    methods: "GET,POST",
    allowedHeaders: "Content-Type"
};
app.use(cors(corsOptions));


// API Route for Handling Form Submissions
app.post('/submit-form', async (req, res, Next) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Validate fields (Optional, but recommended)
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newFormEntry = new Form({ name, email, phone, message });
    await newFormEntry.save();
    
    res.status(201).json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// API Route for Handling Join Form Submission
app.post('/Join', async (req, res) => {
  try {
    const { name, email, phone, address } = req.body; // Removed message field

    // Validate fields
    if (!name || !email || !phone || !address) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newJoinEntry = new Join({ name, email, phone, address });
    await newJoinEntry.save();

    res.status(201).json({ success: true, message: "🎉 Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// API Route to Fetch Join Form Submissions
app.get('/join', async (req, res) => {  
  try {
    const members = await Join.find(); // Ensure `Join` model is used
    res.json(members);  // Send the array directly
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// // payment route
// const paymentRoute = require("");
// app.use("/Donate", PaymentRoute);



// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to Smile Foundation Backend');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
