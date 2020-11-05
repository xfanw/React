import React from "react"

class State2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn:false,
        }
    }
    render(){
        return (
            <div>
                <h1>You are currently logged {this.state.loggedIn? "In" : "Out"}</h1>
            </div>
        )
    }

}
export default State2