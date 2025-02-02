const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const tasksRoute = require("./handel/taskRoutes");
const errorHandler = require("./handel/errorHandler");
const app = express();
const PORT = 8080;

dotenv.config();

app.get("/", (req, res) => {
  res.send("Server Start");
});
app.use(cors());
app.use(express.json());
app.use("/tasks", tasksRoute);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server start on ${PORT}`);
});
