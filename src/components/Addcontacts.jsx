import React, { useState } from 'react'

const Addcontacts = ({ addcontact }) => {
  const [Contactdata, setContactdata] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactdata((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAdd = () => {
    if (Contactdata.name === "" || Contactdata.email === "") {
      alert("Please fill all the details");
      return;
    }

    addcontact(Contactdata);
    setContactdata({name:"",email:""})
  };

  return (
    <div className='formhead'>
      <div className='addcont'>
        <h1>Add Contacts</h1>
      </div>
      <form>
        <label htmlFor="name">Name:</label><br />
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={Contactdata.name}
          onChange={handleChange}
        /><br />
        <label htmlFor="email">Email:</label><br />
        <input
          type="text"
          placeholder="Enter your Email"
          name="email"
          value={Contactdata.email}
          onChange={handleChange}
        />
      </form>
      <br />
      <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  );
};

export default Addcontacts;
