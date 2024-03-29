import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';

const ContactSection = () => {
  return ( 
    <div>
      <div className="contact-container">
      <a href="/contact" style={{
                textDecoration: "none",
                fontSize: "22px",
                fontWeight: "bold"
                }}>Let's get in touch!</a>
        <div className="contact-wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="07471 260822"/>
            <ContactInfoItem icon={<MdEmail />} text="maytevelueta@gmail.com"/>
            <ContactInfoItem text="London, UK"/>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ContactSection;

