import React from "react"

function Event2(props) {
    return (
        <div>
            <input type="checkbox"
                   checked ={props.item.completed}
                   onChange={()=>console.log("changed!")}
            />
            <p>{props.item.text}</p>
            <hr/>
        </div>
    )
}

export default Event2
