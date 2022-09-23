require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

const connect = require('./config/database');
connect();

const cors = require('cors');
app.use(cors());

const { swaggerUi, specs } = require("./config/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

const routes = require('./config/routes');
app.use([routes]);

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
});