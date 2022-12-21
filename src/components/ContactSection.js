import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';

const ContactSection = () => {
  return ( 
    <div>
      <div className="container">
        <h1>Let's get in touch!</h1>
        <div className="contact-wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+52 5551579406"/>
            <ContactInfoItem icon={<MdEmail />} text="maytevelueta@gmail.com"/>
            <ContactInfoItem text="Campeche, México"/>
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

