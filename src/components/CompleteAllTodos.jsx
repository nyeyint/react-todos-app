import React, { useContext } from 'react';
import TodosContext from '../context/TodosContext';

function CompleteAllTodos() {
  const { todos, setTodos } = useContext(TodosContext);
  const completeAllTodos = () => {
    const updatedTodos = todos.map((todo) => {
      todo.isCompleted = true;
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="button" onClick={completeAllTodos}>
        Check All
      </div>
    </div>
  );
}

export default CompleteAllTodos;
