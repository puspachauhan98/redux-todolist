/** @format */
import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center py-10">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-indigo-400 drop-shadow-lg">
          Redux Todo App
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
