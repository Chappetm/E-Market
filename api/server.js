require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");
const cors = require('cors')
const categoryRoles = require('./libs/initialSetup')

connectDB();
const app = express();
categoryRoles();


app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use("/", routes);

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
