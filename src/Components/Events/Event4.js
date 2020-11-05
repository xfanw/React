import React from "react"

class Event4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            handleChange: props.handleChange,
        }
    }

    render() {
        return (
            <div>
                <input type="checkbox"
                       checked={this.state.item.completed}
                       onChange={() => this.state.handleChange(this.state.item.id)}
                />
                <p>{this.state.item.text}</p>
                <hr/>
            </div>
        )
    }

}

export default Event4
