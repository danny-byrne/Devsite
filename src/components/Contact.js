import React , { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [ name, setName ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ sent, setSent ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ buttonText, setButtonText ] = useState('Send');

  const formSubmit = (e) => {
    console.log('send was pressed')
    e.preventDefault()
    setButtonText('...sending')

    let data = {
      name: name,
      email: email,
      message: message,
      subject: subject
    }

    console.log('data is', data)

    axios.post('http://localhost:3000/send-email', data)
      .then(() => {
        setSent(true) 
      })
      .then(() => {
        resetForm()
      })
      .catch((err)=> {
        console.log('Message not sent', err)
      })
  }

  const resetForm = () => {
    setName('')
    setMessage('')
    setEmail('')
    setButtonText('')
  }

  return (
    <div>
      <form className="contact-form" onSubmit={ (e) => formSubmit(e)}>
        <label className="message-name" htmlFor="message-name">Your Name</label>
        <input onChange={e => setName(e.target.value)} name="name" className="message-name" type="text" placeholder="Your Name" value={name}/>

        <label className="message-email" htmlFor="message-email">Your Email</label>
        <input onChange={(e) => setEmail(e.target.value)} name="email" className="message-email" type="email" placeholder="your@email.com" required value={email} />

        <label className="message-email" htmlFor="message-subject">Enter Subject</label>
        <input onChange={(e) => setSubject(e.target.value)} name="subject" className="message-email" type="text" placeholder="topic of inquiry" required value={subject} />

        <label className="message" htmlFor="message-input">Your Message</label>
        <textarea onChange={e => setMessage(e.target.value)} name="message" className="message-input" type="text" placeholder="Please write your message here" value={message} required/>

        <div >
            <button type="submit" className="button">{buttonText}</button>
        </div>
      </form> 
    </div>
  )
}
