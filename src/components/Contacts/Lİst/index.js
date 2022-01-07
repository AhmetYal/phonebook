import {useState}  from 'react'


function List({contacts}) {
    const[filterText,setfiltertext]=useState(" ");

    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())
        );
    });



    return (
        <div>

            <input placeholder="Filter Contact" value={filterText} 
            onChange={(e)=>setfiltertext(e.target.value)} />

         <ul className="list">
             {
                 filtered.map((contacts, i)=>(
                 <li key={i}>
                     <span>{contacts.fullname}</span>
                     <span>{contacts.phonenumber}</span>
                 </li>
                   ))}
         </ul>   
         <p>{filtered.length}</p>
        </div>
    )
}

export default List
