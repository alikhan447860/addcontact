import { useState } from 'react';
import './App.css';
import Addcontacts from './components/Addcontacts';
import ContactList from './components/ContactList';
import Header from './components/Header';
import uuid4 from 'uuid4';


function App() {
  const [contact , setcontact]=useState([])
 const addcontact=(data)=>{
  setcontact([...contact,{id:uuid4(),data}])
 }
 const removecontact=(id)=>{
  const updatelist=contact.filter((val)=>{
    return val.id!==id;
  })
  setcontact(updatelist);
 }
  return (
    <div >
   <Header/>
   <Addcontacts addcontact={addcontact}/>
   <ContactList contact={contact} removecontact={removecontact}/>
    </div>
  );
}

export default App;
