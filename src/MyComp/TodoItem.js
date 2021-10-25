import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div>
            <h4 className="mx-10">{todo.title}</h4>
            <p className="mx-10">{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

        </div>
    )
}
