import React from 'react'

const Addcontacts = () => {
  return (
    <div className='formhead'>
    <div className='addcont'> <h1>Add Contacts</h1></div>
     <form>
        <label htmlFor="name">Name</label>
        <input type="text"  placeholder="Enter your name"
        name="name" id="" />
        
     </form>
    </div>
  )
}

export default Addcontacts
