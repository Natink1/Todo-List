import Form from "./Form";
import { createContext, useState, useEffect, useContext} from "react";

const TodoContext = createContext();

function Todo() {
  
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodo = [todo, ...todos];
    setTodo(newTodo);
  };

  const editTodo = (todoid, newtodo) => {
    if (!todo.text) {
      return;
    }

    setTodo((prev) =>
      prev.map((item) => (item.id === todos.id ? newtodo : item))
    );
  };

  const deletetodo = (index) => {
    const updated = todos.filter((todo) => todo.id !== index);
    setTodo(updated);
  };

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, deletetodo }}>
    <div className="bg-gray-800 text-white shadow-xl p-8 rounded-2xl w-96 mx-auto mt-20">
      <h1 className="text-4xl font-bold text-center mb-4 text-amber-400">
        📝 Todo
      </h1>

      {/* Form */}
      <Form />

      {/* Todo List */}
      <ul className="mt-6 space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-700 p-3 rounded-lg shadow-md"
          >
            <span className="text-lg">{todo.text}</span>
            <button
              onClick={() => deletetodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
    </TodoContext.Provider>
  );
}

// const editor = () => {
//   const [edit, setEdit] = useState({
//     id: null,
//     text: "",
//   });

//   return todos.map((todo, index) => (
//     <div
//       className={todo.isComplete ? "todo-row complete" : "todo-row"}
//       key={index}
//     >
//       <div key={todo.id} onClick={() => complete(todo.id)}></div>
//     </div>
//   ));
// };

export {TodoContext};
export default Todo;
