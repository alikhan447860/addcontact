import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = (props) => {
  const { contact, removecontact } = props;

  const contactList = contact.map((val) => {
    return (
      <div className='contact' key={val.data.email}>
        <div style={{ marginLeft: '2px' }}>{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={() => removecontact(val.id)}>
          <DeleteIcon />
        </span>
      </div>
    );
  });

  return (
    <>
      <div className='contacthead'>Contact List</div>
      <div>{contactList}</div>
    </>
  );
};

export default ContactList;
