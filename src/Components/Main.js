import React from "react"
// import CheckBox from "./CheckBox"
import State1 from "./State/State1";
import State2 from "./State/State2";
import State3TodoList from "./State/State3TodoList";

import Event1 from  "./Events/Event1"
import CheckBoxEvent from "./CheckBoxEvent";
function Main(){
    return (
        <main>
            <Event1 />
            <CheckBoxEvent />
            <State1 />
            <State2 />
            <State3TodoList />

        </main>
    )
}

export default Main