

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URI;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));

const consultationRequests = require("../routes/consultationRequests");
const appointments = require("../routes/appointments");
const articles = require("../routes/articles");
const slides = require("../routes/slides");
const authRouter = require("../rotes/auth");

app.use("/api/consultation-requests", consultationRequests);
app.use("/api/appointments", appointments);
app.use("/api/articles", articles);
app.use("/api/slides", slides);
app.use("/auth", authRouter);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();


