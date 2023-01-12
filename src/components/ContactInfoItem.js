import React from 'react';
import { MdPlace } from 'react-icons/md';

function ContactInfoItem({
    icon = <MdPlace />,
    text = "contact info"
}) {
  return (
    <div className="item-container">
      <div className="info-icon" style={{ background: "#AC7D88" }}>{icon}</div>
      <div className="info-text" style={{ background: "#AC7D88"}}>{text}</div>
    </div>
  )
}

export default ContactInfoItem
