import React, { useState } from 'react';

function TodoForm(props) {
  const [inputTodo, setInputTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputTodo.trim() === '') return;

    props.addTodo(inputTodo);

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
