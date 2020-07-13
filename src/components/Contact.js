import React , { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [ name, setName ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ sent, setSent ] = useState('');
  const [ buttonText, setButtonText ] = useState('');

  const formSubmit = (e) => {
    e.preventDefault()
    setButtonText('...sending')

    let data = {
      name: name,
      email: email,
      message: message
    }

    axios.post('URI', data)
      .then( res => {
        setSent(true), resetForm()
      })
      .catch(()=> {
        console.log('Message not sent')
      }
  }

  const resetForm = () => {
    setName(''),
    setMessage(''),
    setEmail(''),
    setButtonText('')
  }

  return (
    <div>
      <form className="contact-form" onSubmit={ (e) => formSubmit(e)}>
        <label class="message" htmlFor="message-input">Your Message</label>
        <textarea onChange={e => setMessage(e.target.value)} name="message" class="message-input" type="text" placeholder="Please write your message here" value={message} required/>

        <label class="message-name" htmlFor="message-name">Your Name</label>
        <input onChange={e => setName(e.target.value)} name="name" class="message-name" type="text" placeholder="Your Name" value={name}/>

        <label class="message-email" htmlFor="message-email">Your Email</label>
        <input onChange={(e) => setEmail(e.target.value)} name="email" class="message-email" type="email" placeholder="your@email.com" required value={email} />

        <div className="button--container">
            <button type="submit" className="button button-primary">{ buttonText }</button>
        </div>
      </form> 
    </div>
  )
}
