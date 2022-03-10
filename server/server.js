/**
 * express.router() option? : https://stackoverflow.com/questions/61852261/nodemailer-not-working-on-heroku-deployment
 *
 * sending from emailjs
 * https://sheelahb.com/blog/how-to-send-email-from-react-without-a-backend/
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');

const port = process.env.PORT || 3000;

require('dotenv').config();

const directory = process.env.NODE_ENV === 'development' ? 'public' : 'build';
const publicPath = path.join(__dirname, '..', directory);

const app = express();

app.use(cors());
app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
