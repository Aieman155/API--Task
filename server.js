console.log("SERVER FILE RUNNING");
const express = require("express");

const app = express();

// Middleware to read JSON data
app.use(express.json());

// import routes
const authRoutes = require("./routes/authRoutes");
// use routes
app.use("/api/auth", authRoutes);


// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});