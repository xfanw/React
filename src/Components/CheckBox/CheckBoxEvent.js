import React from "react"
import Event2 from "../Events/Event2";
//import Joke from "./practice/Joke";

//import Item from "./Props/Item"
import todoData from "../Props/todoData"
function CheckBoxEvent() {
    const todoItem = todoData.map((item)=><Event2
        key = {item.id}
        item = {item}
    />)
    return (
        <div>
            {todoItem}
        </div>
    )
}

export default CheckBoxEvent