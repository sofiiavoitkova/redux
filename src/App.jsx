import { useState } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/ToDoList";
import FilterButtons from "./components/FilterButton";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
        <div className="w-full max-w-4xl p-6 bg-gray-100 rounded shadow-lg bg-gray-100">
          <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 uppercase">
            TODO APP
          </h1>
          <InputForm />
          <FilterButtons />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
