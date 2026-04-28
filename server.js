const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Practice 11 Deployment Successful ✅");
});

app.get("/api", (req, res) => {
  res.json({ message: "API is working!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});