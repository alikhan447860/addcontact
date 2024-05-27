import { useState } from 'react';
import './App.css';
import Addcontacts from './components/Addcontacts';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const [contact , setcontact]=useState([])
 const addcontact=(data)=>{
  setcontact([...contact,data])
 }
  return (
    <div >
   <Header/>
   <Addcontacts addcontact={addcontact}/>
   <ContactList contact={contact}/>
    </div>
  );
}

export default App;
