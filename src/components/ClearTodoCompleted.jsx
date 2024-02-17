import React, { useContext } from 'react';
import TodosContext from '../context/TodosContext';

function ClearTodoCompleted() {
  const { todos, setTodos } = useContext(TodosContext);

  const clearTodoCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };
  return (
    <button className="button" onClick={clearTodoCompleted}>
      Clear completed
    </button>
  );
}

export default ClearTodoCompleted;
