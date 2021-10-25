import React from 'react'
import {TodoItem} from "../MyComp/TodoItem";
export const Todos = (props) => {
    let myStyle={
        minHeight:"100vh",
        margin:"10px auto"
    }
    return (
        <div className="Container my-3" style={myStyle}>
            <h3 className="text-center my-3 container">Todo List</h3>
            {props.todos.length===0?"No tasks to show ":
            props.todos.map((todo)=>{
                return(
                    <>
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
                    </>)
            })
             }
        </div>
    )
}
