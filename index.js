const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    status: "success",
    application: "DevOps Technical Assignment",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    health: "OK"
  });
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});



