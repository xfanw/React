import React from "react"

function Item(props) {
    return (
        <div>
            <input type="checkbox" checked ={props.item.completed}/>
            <p>{props.item.text}</p>
            <hr/>
        </div>
    )
}

export default Item


