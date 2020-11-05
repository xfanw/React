import React from "react"

function Event1(){
    return(
        <div>
            <img onMouseOver = {()=>console.log("Hover")} src="http://www.fillmurray.com/200/100" alt="" />
            <br/>
            <br/>
            <button onClick = {(e)=>{
                e.preventDefault()
                console.log("I was clicked")
            }}>Click me</button>
        </div>
    )
}

export default Event1