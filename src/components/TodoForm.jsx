import React, { useContext, useState } from 'react';
import TodosContext from '../context/TodosContext';

function TodoForm() {
  const [inputTodo, setInputTodo] = useState('');
  const { todos, setTodos } = useContext(TodosContext);

  const addTodo = (inputTodo) => {
    let newTodoId = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

    setTodos([
      ...todos,
      { id: newTodoId, text: inputTodo, isCompleted: false },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputTodo.trim() === '') return;

    addTodo(inputTodo);

    setInputTodo('');
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
}

export default TodoForm;
