
import './App.css';
import  Header  from "./MyComp/Header";
import {Todos} from "./MyComp/Todos";
import {Footer} from "./MyComp/Footer";
import React,{useState,useEffect} from 'react';
import {AddTodo} from "./MyComp/AddTodo"

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("yoyo");
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    console.log("Adding",title,desc);
    let sno;
    if(todos.length===0){
       sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
   
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,

    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
   
  }

  const [todos,setTodos]=useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  
  }, [todos])

  return (
    <>
      <Header title="todo"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
