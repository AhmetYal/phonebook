import {useEffect, useState} from 'react'

const initialFormValues={fullname:"", phonenumber:""};

function Form({addContact,contacts}) {
  
    const [form,setform]=useState(initialFormValues);

    useEffect(()=>{
        setform(initialFormValues);
    },[contacts]);

    const onChangeInput =(e)=>{
        setform({...form, [e.target.name] : e.target.value});
    };

    const onSubmit =(e)=>{
        e.preventDefault();
        if(form.fullname === "" || form.phonenumber=== "" ){
            return false;
        }
        addContact([...contacts,form]);
        

    };

    return (
        <form onSubmit={onSubmit}>
            <div>
            <input 
            name="fullname" 
            placeholder='Full Name' 
            value={form.fullname}
            onChange={onChangeInput}/>
            </div>
            <br></br>
            <div>
            <input 
            name="phonenumber"
            placeholder='Phone Number' 
            value={form.phonenumber}
            onChange={onChangeInput}/>
            </div>
            <br></br>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
