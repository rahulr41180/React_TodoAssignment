
import { useState } from "react";

import { TodoList } from "./TodoList"; 

import { nanoid } from "nanoid";

const Todo = () =>{
    const [ Todolist, setTodolist ] = useState([]);
    const [Text, setText] = useState(""); 
    
    const getData = (todo) =>{
        console.log('todo:', todo)
        const payload = {
            title : todo,
            status : false,
            id : nanoid(5)
        }
        console.log('payload:', payload)
        setTodolist([ ...Todolist, payload ])
    }

    const handlestatus = (id) =>{
        
        console.log('id:', id)
        setTodolist([...Todolist.map((element) =>{

            return (

                element.id === id ? {...element, status : !element.status} : element

            )

        })])

    }
    
    console.log('Text:', Text)

    console.log('Todolist:', Todolist)

    return (

        <div className="TodolistInputButtonBox">

            <TodoList AllTodo = {Todolist} statusfn = {handlestatus} />
            <div className="InputButtonBox">
                <input className="AddItemInput" onChange={(element) =>{

                    console.log('element:', element.target.value)

                    setText(element.target.value);

                }} type="text" />
                <button className="AddItemButton" onClick = {() =>{
                    getData(Text);
                }}>+</button>
            </div>

        </div>

    )
}

export { Todo }