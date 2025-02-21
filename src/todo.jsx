import Form from './Form'
import { useState,useEffect } from 'react';

function Todo() {

   const [todos, setTodo] = useState([""]); 
  
  const add = todo => {
    if(!todo.text){
      return;
    }
 
  const newTodo = [todo, ...todos]
  setTodo(newTodo);
  
}

useEffect(() => {
  console.log("Todos updated:", todos); // Log inside useEffect
}, [todos]); // Only run when todos changes


  return (
    <div class="flex flex-col items-center justify-center mt-30">
      <h1 className="text-4xl">Todo</h1>
      <Form onSubmit={add}/>

    </div>
  );
}


export default Todo