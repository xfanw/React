import React from "react"

//import Joke from "./practice/Joke";

import Item from "./practice/Item"
import todoData from "./practice/todoData"
function CheckBox() {
    const todoItem = todoData.map((item)=><Item
        key = {item.id}
        item = {item}
    />)
    return (
        <div>
            {todoItem}
        </div>
    )
}
//second version using map
//import jokesData from "./practice/jokesData"
// function CheckBox() {
//     const jokeComponents = jokesData.map(
//         (joke)=>
//             <Joke
//                 key = {joke.id}
//                 question={joke.question}
//                 punchLine={joke.punchLine}
//             />)
//
//     return (
//         <div>
//             {jokeComponents}
//         </div>
//     )
// }




// first version : pass arguments
// function CheckBox() {
//     return (
//         <div>
//             <Joke punchLine = "Q0"/>
//             <Joke
//                 question="Q1"
//                 punchLine="A1"
//             />
//             <Joke
//                 question="Q2"
//                 punchLine="A2"
//             />
//             <Joke
//                 question="Q3"
//                 punchLine="A3"
//             />
//             <Joke
//                 question="Q4"
//                 punchLine="A4"
//             />
//         </div>
//     )
// }

export default CheckBox