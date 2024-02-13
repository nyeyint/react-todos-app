import '../reset.css';
import '../App.css';
import { useState } from 'react';
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

  const [inputTodoId, setInputTodoId] = useState(4);
  const [filter, setFilter] = useState('all');

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

  const remainingTodo = todos.filter((todo) => !todo.isCompleted).length;

  const clearTodoCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completeAllTodos = () => {
    const updatedTodos = todos.map((todo) => {
      todo.isCompleted = true;
      return todo;
    });

    setTodos(updatedTodos);
  };

  const todosFiltered = (filter) => {
    if (filter === 'all') {
      return todos;
    }

    if (filter === 'active') {
      return todos.filter((todo) => !todo.isCompleted);
    }

    if (filter === 'completed') {
      return todos.filter((todo) => todo.isCompleted);
    }
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
            remaining={remainingTodo}
            clearTodoCompleted={clearTodoCompleted}
            completeAllTodos={completeAllTodos}
            filter={filter}
            setFilter={setFilter}
            todosFiltered={todosFiltered}
          />
        )}
      </div>
    </div>
  );
}

export default App;
