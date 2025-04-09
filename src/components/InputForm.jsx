import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const InputForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleAddClick = () => {
    if (task !== "") {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div className="flex items-center mb-4">
      <input
        className="flex-grow p-4 bg-white text-xl border-b-1 border-gray-400 focus:outline-none focus:border-blue-500 cursor-pointer"
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="ml-4 p-4 bg-blue-500 text-xl font-bold text-white rounded hover:bg-blue-600 focus:outline-none cursor-pointer"
        onClick={handleAddClick}
      >
        ADD
      </button>
    </div>
  );
};

export default InputForm;
