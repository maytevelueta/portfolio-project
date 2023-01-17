import React from 'react';
import { MdPlace } from 'react-icons/md';

function ContactInfoItem({
    icon = <MdPlace />,
    text = "contact info"
}) {
  return (
    <div className="item-container">
      <div className="info-icon">{icon}</div>
      <div className="info-text">{text}</div>
    </div>
  )
}

export default ContactInfoItem
