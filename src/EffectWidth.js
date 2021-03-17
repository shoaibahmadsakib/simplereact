import React,{useState,useEffect} from 'react'

function EffectWidth() {

    const [width ,setWidth] =useState(window.screen.width);

    const actualWidth =()=>{
   
      setWidth()
    }
    useEffect(() => {
       window.addEventListener("resize",actualWidth)
    })

    return (
        <div>
            <p>something is happened</p>
            <h1>{width}</h1>
        </div>
    )
}

export default EffectWidth
