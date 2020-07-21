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
// let emailjs = require('emailjs')

require('dotenv').config();

// emailjs.init(`${process.env.USERID}`)

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

app.post('/send-email', (req, res) => {
  console.log('request: ', req.body)
  let data = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL,
    subject: `${data.subject}`,
    html: `<p>${data.name}</p>
            <p>${data.email}</p> 
            <p>${data.message}</p>`
  };

  // console.log('mailOptions are', mailOptions)

  transporter.sendMail(mailOptions,[
  (err, info) => {
    if(err) {
      res.send('there was an error server.js', err)
    } else {
      res.send(info.messageId)
    }
    transporter.close();
  }]);
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});