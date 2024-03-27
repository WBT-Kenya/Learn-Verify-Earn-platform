const mongoose = require('mongoose');
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
// const contractRoutes = require("./routes/contractRoutes");
const User = require("./models/User");
require("dotenv").config();


connectionParams = {
  useUnifiedTopology: true,
};

const port = 3000;

const MONGO_URI = process.env.MONGO_URI;
// mongoose.connect(process.env.MONGO_URI);
// console.log("MongoDB URI:", process.env.MONGO_URI);
const app = express();


//middleware
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth", authRoutes);
// app.use(contractRoutes);
// app.use("/videos", videoRoutes);

// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });


app.listen(port, () => console.log(`App started on port ${port}`));
