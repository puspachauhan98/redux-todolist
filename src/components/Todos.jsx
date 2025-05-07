/** @format */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleUpdate = (id, text) => {
    setEditingId(id);
    setNewText(text);
  };

  const saveUpdate = (id) => {
    dispatch(updateTodo({ id, text: newText }));
    setEditingId(null);
    setNewText("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-6 text-center">
        Your Todos
      </h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {editingId === todo.id ? (
              <div className="flex items-center space-x-3 w-full">
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="flex-grow bg-gray-800 text-white rounded border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 outline-none py-2 px-4"
                />
                <button
                  onClick={() => saveUpdate(todo.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span className="text-white text-lg font-medium">
                  {todo.text}
                </span>
                <div className="space-x-2">
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(todo.id, todo.text)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
