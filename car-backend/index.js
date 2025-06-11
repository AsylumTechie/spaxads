const express = require("express");
const cors = require("cors");
const http = require("http");
const connectDB = require("./config/database");
const carRoutes = require("./routes/sellCarRoutes");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: [process.env.ORIGIN_2],
    methods: ["GET", "POST", "PUT"],
  })
);

app.use(express.json());

connectDB();

app.use("/api", carRoutes);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
