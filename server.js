const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "v1";

app.get("/", (req, res) => {
  res.send(`Hello from Node.js app - Version: ${VERSION}`);
});

app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok", version: VERSION });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, version ${VERSION}`);
});
