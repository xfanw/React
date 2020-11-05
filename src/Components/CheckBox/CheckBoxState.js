import React from "react"
import Event4 from "../Events/Event4"
import todoData from "../Props/todoData"

class CheckBoxState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: todoData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState =>{
            const updated = prevState.todoData.map(todo=>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todoData: updated
            }
        })
    }

    render() {
        const toDos = this.state.todoData.map(item =>
            <Event4 key={item.id}
                    item={item}
                    handleChange={this.handleChange}
            />
        )
        return (
            <div>
                {toDos}
            </div>
        )
    }
}

export default CheckBoxState