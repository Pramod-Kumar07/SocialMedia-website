import React, { useState } from "react";
import Heading from "../atoms/Heading";
import styles from "./TodoList.module.css"

function TodoList() {
    const[input, setInput] = useState('');
    let List=[];

    function handleClick() {
        setInput(input);
        List.push(input);
    }
    return(
        <div className={styles.main}>
        <Heading tasks={List.length}/>
        {input}
        <br/>
        <input type="text" placeholder="Add a new task" onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoList;