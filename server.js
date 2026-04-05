require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./src/routes/authRoutes"));
app.use("/records", require("./src/routes/recordRoutes"));
app.use("/summary", require("./src/routes/summaryRoutes"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
