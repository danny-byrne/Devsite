const express = 
  require('express'), 
  bodyParser = require('body-parser'), 
  nodemailer = require('nodemailer'), 
  cors = require('cors'), path = require('path'), 
  port = process.env.PORT || 3000;

require('dotenv').config();

  // let directory = process.env.NODE_ENV === 'development' ? 'public' : 'build',
let publicPath = path.join(__dirname, '..', 'build');

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
      res.send(err)
    } else {
      res.send(info.messageId)
    }
    transporter.close();
  }]);
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});