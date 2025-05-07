/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="max-w-2xl mx-auto mt-6 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
    >
      <input
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full sm:flex-grow bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 outline-none py-3 px-4 placeholder-gray-400 "
      />
      <button
        type="submit"
        className="w-full sm:w-auto bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-200 shadow-md hover:shadow-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
