import Form from './Form'
import { useState } from 'react';

function Todo() {

   const [todos, setTodo] = useState([""]); 
  
  const add = todo => {
    if(!todo.text){
      return;
    }
 
  const newTodo = [todo, ...todos];
  setTodo(newTodo);
  console.log(...todos);

}

  return (
    <div class="flex flex-col items-center justify-center mt-30">
      <h1 className="text-4xl">Todo</h1>
      <Form onSubmit={add}/>
      <ul>
       
          <li>{todos.text}</li>
      
      </ul>
    </div>
  );
}


export default Todo