require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
const port = process.env.PORT || 1337;

const app = express();

if (process.env.PRODUCTION) {
  app.use(express.static(process.env.CLIENT_FOLDER));
}
app.use(bodyParser.json());

app.post('/api/account_service/account', (req, res) => {
  db.save(req.body);
  res.send('You saved a trip')
});

app.get('/api/account_service/account/:email', (req, res) => {
  db.trip.find({ email: req.params.email })
  .then(trips => {
    res.end(JSON.stringify(trips));
  })
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
})