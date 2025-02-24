import React, { useState, useContext } from "react";
import { TodoContext } from "./Todo"; 

const Form = () => {
  const [tasks, setTask] = useState("");
  const { addTodo } = useContext(TodoContext); // Access the `add` function from context

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: tasks,
    });

    setTask("");
  };

  return (
    <>
      <form className="flex" onSubmit={handleAdd}>
        <input
          value={tasks}
          onChange={handleChange}
          type="text"
          className="mt-5 p-2 h-10 w-75 rounded-md bg-[#fff] text-[#000]"
          placeholder="the task today?"
        />
        <button
          type="submit"
          className="bg-amber-300 h-10 mt-5 p-2 ml-1 w-15 rounded-xl hover:bg-amber-500 transition-all ease-in-out"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
