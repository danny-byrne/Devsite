import React , { useState } from 'react';
import axios from 'axios';
// require('dotenv').config();

/**
 * eventually implement OATH as described in https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
 * 
 * nodemailer tuts: https://www.youtube.com/watch?v=Va9UKGs1bwI
 * 
 * API from dev to prod : https://medium.com/the-andela-way/creating-a-react-redux-app-that-consumes-an-api-from-development-to-production-part-1-f03c5cc86ba
 * 
 * .env on heroku https://stackoverflow.com/questions/49905070/how-to-add-env-file-or-otherwise-set-environment-variables-in-a-heroku-app
 */

export default function Contact() {
  const [ name, setName ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ sent, setSent ] = useState(false);
  const [ buttonText, setButtonText ] = useState('Send');

  let URI = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_URI : process.env.REACT_APP_PROD_URI;
  console.log(process.env.REACT_APP_DEV_URI, process.env.REACT_APP_PROD_URI)
  console.log(`in ${process.env.NODE_ENV} our URI is ${URI}`)

  async function formSubmit(e){
    e.preventDefault()
    setButtonText('...sending')

    let data = {
      name: name,
      email: email,
      message: message,
      subject: subject
    }

    axios.post(`${URI}/send-email`, data)
      // .then(res => {
      //   console.log('sent', res)
      //   setSent(true) 
      //   resetForm()
      // })
      // .catch((err)=> {
      //   console.log('Message not sent', err)
      // })

      resetForm()
  }

  const resetForm = () => {
    setName('')
    setMessage('')
    setEmail('')
    setSubject('')
    setButtonText('Send')
  }

  return (
    <div>
      {/* <form className="contact-form" onSubmit={(e) => formSubmit(e)}>
        <label className="message-name" htmlFor="message-name">Your Name</label>
        <input onChange={e => setName(e.target.value)} name="name" className="message-name" type="text" placeholder="Your Name" value={name}/>

        <label className="message-email" htmlFor="message-email">Your Email</label>
        <input onChange={(e) => setEmail(e.target.value)} name="email" className="message-email" type="email" placeholder="your@email.com" required value={email} />

        <label className="message-email" htmlFor="message-subject">Enter Subject</label>
        <input onChange={(e) => setSubject(e.target.value)} name="subject" className="message-email" type="text" placeholder="topic of inquiry" required value={subject} />

        <label className="message" htmlFor="message-input">Your Message</label>
        <textarea onChange={(e) => setMessage(e.target.value)} cols="60" rows="10" name="message" className="message-input" type="text" placeholder="Please write your message here" value={message} required/>
        <div >
            <button type="submit" className="button">{buttonText}</button>
        </div>
      </form>  */}
      {/* <h2>Contact form coming soon! For now...</h2> */}
      <h3>danny.byrne.dev@gmail.com</h3>
    </div>
  )
}
