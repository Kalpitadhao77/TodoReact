// import React from 'react'
import React , { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const  [title,setTitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or desc not filled");
        }
        
        addTodo(title,desc);
    }
    return (
        <div className="container my-3">
            <h3>Add a Task</h3>
             <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="task" className="form-label">Task</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="task" aria-describedby="emailHelp"/>
                {/* <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" value={desc}  onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className ="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}
