import React, { useState } from 'react';
import './TodoItem.css';

export default function TodoItem({ id, text, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggle = () => setIsCompleted((s) => !s);

  return (
    <div className={`todo-item ${isCompleted ? 'completed' : ''}`}>
      <label className="todo-left">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={toggle}
          aria-label={`Mark ${text} as completed`}
        />
        <span className="todo-text">{text}</span>
      </label>
      <div className="todo-right">
        <button
          className="delete-btn"
          onClick={() => onDelete(id)}
          aria-label={`Delete ${text}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}