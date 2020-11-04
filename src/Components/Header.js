import React from "react"
import NavBar from "./NavBar";

// const Header = () =>
//     <header>
//         <h3>Some Info</h3>
//         <p>Some paragraph</p>
//         <NavBar/>
//     </header>
// }
function Header() {
    const firstName = "Frank"
    const lastName = "Wang"
    const date = new Date()
    let greeting
    const styles = {
        fontsize:30
    }
    switch (date.getHours() < 12){
        case true:
            greeting = "Good Morning"
            styles.color = "green"
            break
        case false:
            greeting = "Good Afternoon"
            styles.color = "red"
            break
        default:
            greeting = "default"
            styles.color = "white"
            break

    }

    return (
        <header>
            <h3 style = {styles}>{greeting}! It is {date.getHours()%12} o'clock!</h3>
            <p>Hello, {firstName} {lastName}</p>
            <NavBar/>
        </header>
    )
}


export default Header