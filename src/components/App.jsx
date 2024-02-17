import '../reset.css';
import '../App.css';
import { useState } from 'react';
import NoTodoList from './NoTodoList';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useLocalStorage from '../hooks/useLocalStorage';
import TodosContext from '../context/TodosContext';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');

  return (
    <TodosContext.Provider value={{ todos, setTodos, filter, setFilter }}>
      <div className="todo-app-container">
        <div className="todo-app">
          <h2>Todo App</h2>
          <TodoForm />
          {todos.length === 0 ? <NoTodoList /> : <TodoList />}
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
