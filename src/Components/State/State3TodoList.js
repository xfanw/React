import React from "react"
import todoData from "../Props/todoData";
import Item from "../Props/Item";

class State3TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoData :todoData.map(item=><Item key = {item.id} item = {item}/>),
        }
    }
    render(){
        return(
            <div className = "todo-list">
                {this.state.todoData}
            </div>
        )
    }
}


export default State3TodoList