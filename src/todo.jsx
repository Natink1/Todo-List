import Form from "./Form";
import { useState, useEffect } from "react";

function Todo() {
  const [todos, setTodo] = useState([]);

  const add = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodo = [todo, ...todos];
    setTodo(newTodo);
  };

  const deletetodo = (index) => {
    const updated = todos.filter((todo, i) => i == index);
    setTodo(updated);
  }

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  return (
    <div class="bg-[#343434] place-self-center flex flex-col items-center mt-20 w-150 h-100 rounded-2xl pt-10">
      <h1 className="text-4xl">Todo</h1>
      <Form onSubmit={add} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="mt-2">
            {todo.text} <button onClick={() => deletetodo(index)}>D</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const editor = () => {

  const  [edit, setEdit] = useState(
    {
      id: null,
      text: ''
    }
  )

return todos.map((todo, index) => (

  <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
    
    <div key={todo.id} onClick={() => complete(todo.id)}></div>

  </div>

))

} 


export default Todo;
