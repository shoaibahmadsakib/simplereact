import React from 'react'

function ItemValue(props) {

   
    return (
        <div className ="todo_style"> 
       
            <li>
          
            {props.text}
            <button><span style={{background:'black', color:"white",padding:'0px 10px'}} onClick={()=>{
                props.onSelect(props.id)
            }}>-</span></button>
            </li>
           
        </div>
    )
}

export default ItemValue
