import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="app-root">
      <div className="app-container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;