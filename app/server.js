const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "1.0.0";
const ENVIRONMENT = process.env.ENVIRONMENT || "local";

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/info", (req, res) => {
  res.json({
    name: "Cloud Dashboard",
    version: APP_VERSION,
    environment: ENVIRONMENT,
    platform: "AWS EKS",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Cloud Dashboard running on port ${PORT}`);
  console.log(`Environment: ${ENVIRONMENT}`);
  console.log(`Version: ${APP_VERSION}`);
});
