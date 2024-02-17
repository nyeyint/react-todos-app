import React, { useContext } from 'react';
import TodosContext from '../context/TodosContext';

function RemainingItemCount() {
  const { todos } = useContext(TodosContext);
  const remaining = todos.filter((todo) => !todo.isCompleted).length;

  return <span>{remaining} items remaining</span>;
}

export default RemainingItemCount;
