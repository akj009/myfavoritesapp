const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/list/all/:type', (req, res) => {
    console.log(`incoming request for ${req.params.type}`);
    res.send({ list: data[req.params.type] });
});

app.listen(port, () => console.log(`Listening on port ${port}`));