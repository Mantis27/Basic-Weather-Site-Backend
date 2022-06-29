/* ============================
Imports
===============================*/
// Import modules
const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Import configurations
const swaggerDocs = require("./Config/configureSwagger");
// Import routes
const locationRoute = require("./Routes/Location");
const userRoutes = require("./Routes/User");
const authRoutes = require("./Routes/Auth");
// Import helpers
// ...

/* ============================
Configure App
===============================*/
// app variables
const port = process.env.PORT || 3000;
const app = express();
const mongooseConnectionString = "";
// Allow request to API from all origins
app.use(cors());
// Set swagger UI API doc path
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Set routes
app.use("/location", locationRoute);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);
// Set content type to json for all requests
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});
// Use body-parser in every request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", bodyParser.json());

// Establish connection to the database
mongoose.connect(
    mongooseConnectionString
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connection is open...");
});

/* ============================
Routes
===============================*/
/**
 * @swagger
 * /:
 *  get:
 *    description: entry point to REST API
 */
app.get("/", (req, res) => {
    res.status(200).json({message: `Welcome to the Weathering With Me API server ${__dirname}`});
});

// Start the web server
app.listen(port);