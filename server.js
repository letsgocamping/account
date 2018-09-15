require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 1337;

const app = express();

app.use(express.static(process.env.CLIENT_FOLDER));
app.use(bodyParser.json());

app.get('/api/account_service/account', (req, res) => {
  // do things
});

app.post('/api/account_service/account', (req, res) => {
  // do things
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})