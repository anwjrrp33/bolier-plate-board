require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

const cors = require('cors');
app.use(cors());

const connect = require('./config/database');
connect();

const routes = require('./config/routes');
app.use([routes]);

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`);
});