const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());
const port = 9900;

app.listen(() => {
    console.log(`Server running at port ${port}`);
})