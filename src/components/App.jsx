import '../reset.css';
import '../App.css';
import { useState } from 'react';
import { isEditable } from '@testing-library/user-event/dist/utils';
import NoTodoList from './NoTodoList';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Finish React Series',
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 2,
      text: 'Go to Grocery',
      isCompleted: true,
      isEditing: false,
    },
    {
      id: 3,
      text: 'Do other thing',
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const [inputTodo, setInputTodo] = useState('');

  const [inputTodoId, setInputTodoId] = useState(4);

  const addTodo = (inputTodo) => {
    setTodos([
      ...todos,
      { id: inputTodoId, text: inputTodo, isCompleted: false },
    ]);

    setInputTodoId((prevInputTodoId) => prevInputTodoId + 1);
  };

  const handleUpdate = (e, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: e.target.value, isEditing: false };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteItem = (id) => () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toogleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const toogleEditing = (id) => {
    if (todos.find((todo) => todo.id === id).isCompleted) {
      alert('You cannot edit a completed task');
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        {todos.length === 0 ? (
          <NoTodoList />
        ) : (
          <TodoList
            todos={todos}
            toogleCompleted={toogleCompleted}
            toogleEditing={toogleEditing}
            handleUpdate={handleUpdate}
            deleteItem={deleteItem}
          />
        )}
      </div>
    </div>
  );
}

export default App;
