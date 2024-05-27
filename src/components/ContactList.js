import React from 'react'

const ContactList = ({contact}) => {
    const contactList=contact.map((val)=>{
        return(<div className='contact'>
              <div style={{marginLeft:"2px"}}>{val.name}</div>
            <div>{val.email}</div>
        </div>
          
        )
    })
  return (
    <>
<div className='contacthead'>Contact List</div>
<div>{contactList}</div>
    </>
  
  )
}

export default ContactList
