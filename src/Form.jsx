import { useState } from "react";

const Forms = (props) => {
  const [tasks, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: tasks,
    });

    setTask("");
  };

  return (
    <>
      <form
        
        onSubmit={handleAdd}
      >
        <input 
          value={tasks}
          onChange={handleChange}
          type="text"
          className="mt-5 p-2 h-10 w-75 rounded-md bg-[#fff] text-[#000]"
          placeholder="the task today?"
        />
        <button
          type="submit"
          className="bg-amber-300 h-10 mt-1 ml-5 w-15 rounded-2xl hover:bg-amber-500 transition-all ease-in-out"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Forms;
