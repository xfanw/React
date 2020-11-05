import React from "react"

class State1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Frank",
            age: "35",
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default State1