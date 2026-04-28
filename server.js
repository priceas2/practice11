const express = require("express");

const app = express();

// Environment variable
const greeting = process.env.GREETING || "Hello from your deployed app!";

// Home route
app.get("/", (req, res) => {
  res.send("Practice 12 Running ✅");
});

// API route (THIS is what your assignment checks)
app.get("/api/message", (req, res) => {
  res.json({ message: greeting });
});

// Required for deployment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});