import React, { useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Повчити реакт" },
    { id: 2, text: "Подумати про реакт" },
    { id: 3, text: "Переглянути туторіал з реакту" },
  ]);

  const addTodo = (text) => {
    const nextId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos((prev) => [...prev, { id: nextId, text }]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <section className="todo-list-root">
      <h2 className="title">My Todo List</h2>

      <div className="add-wrap">
        <AddTodoForm onAdd={addTodo} />
      </div>

      <div className="items">
        {todos.length === 0 ? (
          <p className="empty">No todos — add your first task!</p>
        ) : (
          todos.map((t) => (
            <TodoItem key={t.id} id={t.id} text={t.text} onDelete={deleteTodo} />
          ))
        )}
      </div>
    </section>
  );
}