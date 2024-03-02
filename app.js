const process = require("process");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const connectDB = require("./db/connect");
require("dotenv").config();

const port = 3000;

//middleware
app.use(express.json()); // rec.body deki datayı almak için kullanmamız gerekiyor

// routes
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

// deprecation warnings handling
process.removeAllListeners("warning");
