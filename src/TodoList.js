import React, { useState, } from 'react'
import ItemValue from './ItemValue';

function TodoList() {

const [value,setValue] =useState("sakib");
const [item ,setItem] =useState(["sakib"]);

   const changeHere=(e)=>{
    setValue(e.target.value)
   }
    
   const changeClick=()=>{
       setItem((oldItem =>{
           return [...oldItem ,value]
       }))
}
//last part
    const deleteItem =(id)=>{
    console.log("delete");
    
     setItem((oldItem) =>{
         return oldItem.filter(( sss,index)=>{
             return index !== id;
         })
     })
    }

    return (
        <div>
            
                <input type="text" placeholder="here is the list" onChange={changeHere} 
                />
                <button onClick={changeClick}>+</button>
         
            <ul>
                {/* <li>{value}</li> */}
                {
                    item.map((hereItem, index)  =>{
                      return <ItemValue 
                      key={index} 
                      id={index} 
                      text ={hereItem}
                      onSelect ={deleteItem} />
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList
