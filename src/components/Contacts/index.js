import {useState,useEffect} from 'react'

import List from './Lİst'
import Form from './Form'

function Contacts() {
const [contacts, setcontacts]=useState([]);
useEffect(()=>{
console.log(contacts);
},[contacts]);

    return (
        <div> 
          <h1>Contact List</h1>  
          <br></br>
           <List/> 
           <Form addContact={setcontacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
