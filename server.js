const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Connectdb = require('./ConnectDB/ConnectDB');

const app = express();

app.use(cors());

Connectdb();

app.use(express.json());

app.use(bodyParser.json());
const port = 9800;

app.listen(() => {
    console.log(`Server running at port ${port}`);
})