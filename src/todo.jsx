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

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  return (
    <div class="bg-[#343434] place-self-center flex flex-col items-center mt-20 w-150 h-100 rounded-2xl pt-10">
      <h1 className="text-4xl">Todo</h1>
      <Form onSubmit={add} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mt-2">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
