import React from "react"

class Event3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    //Third version
    handleClick() {
        this.setState(prevState =>{
            return {
                count: prevState.count + 1
            }
        })
    }

    // Second Version
    // handleClick() {
    //     let current = this.state.count
    //     current++;
    //     this.setState({
    //         count: current
    //     })
    // }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.handleClick()
                }}>Change
                </button>
            </div>
        )
    }

    // Frist Version works
    // render(){
    //     return (
    //         <div>
    //             <h1>{this.state.count}</h1>
    //             <button onClick={()=>{
    //                 let current = this.state.count
    //                 current ++;
    //                 this.setState({
    //                     count:current
    //                 })
    //             }}>Change</button>
    //         </div>
    //     )
    // }
}

export default Event3