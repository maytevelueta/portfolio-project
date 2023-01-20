import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return(
    <p>Your message has been successfully sent. I will contact you soon.</p>
  );
};

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const form = useState();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mp95mmb', 'template_lkf72o6', form.current, 'W4hMrFL5c8e7cdZxY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  setTimeout(() => {
    ContactForm(false);
  }, 5000);

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
            <label htmlFor='name'>Your name
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
        </div>
        <div className="form-group">
            <label htmlFor='email'>Your email
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
        </div>
        <div className="form-group">
            <label htmlFor='message'>Your message
            <textarea type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
        </div>
        <button type='submit'>Send</button>
        <div className='sent'>{result ? <Result /> : null}</div>
      </form>
    </div>
  );
};

export default ContactForm;
