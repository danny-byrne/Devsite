/**
 * express.router() option? : https://stackoverflow.com/questions/61852261/nodemailer-not-working-on-heroku-deployment
 * 
 * sending from emailjs
 * https://sheelahb.com/blog/how-to-send-email-from-react-without-a-backend/
 */
let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors'), path = require('path')
let port = process.env.PORT || 3000


require('dotenv').config();


let directory = process.env.NODE_ENV === 'development' ? 'public' : 'build',
publicPath = path.join(__dirname, '..', directory);

const app = express();

console.log(process.env.NODE_ENV)

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