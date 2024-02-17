import React, { useContext } from 'react';
import RemainingItemCount from './RemainingItemCount';
import ClearTodoCompleted from './ClearTodoCompleted';
import CompleteAllTodos from './CompleteAllTodos';
import TodoFilter from './TodoFilter';
import TodosContext from '../context/TodosContext';

function TodoList() {
  const { todos, setTodos, filter } = useContext(TodosContext);

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

  const todosFiltered = () => {
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
    <>
      <ul className="todo-list">
        {todosFiltered().length ? (
          todosFiltered().map((todo) => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input
                  type="checkbox"
                  onChange={() => toogleCompleted(todo.id)}
                  checked={todo.isCompleted}
                />
                {todo.isEditing && (
                  <input
                    autoFocus
                    type="text"
                    className="todo-item-input"
                    defaultValue={todo.text}
                    onBlur={(e) => handleUpdate(e, todo.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        toogleEditing(todo.id);
                      }
                      if (e.key === 'Enter') {
                        handleUpdate(e, todo.id);
                      }
                    }}
                  />
                )}
                {!todo.isEditing && (
                  <span
                    className={`todo-item-label ${
                      todo.isCompleted ? 'line-through' : ''
                    }`}
                    onDoubleClick={() => toogleEditing(todo.id)}
                  >
                    {todo.text}
                  </span>
                )}
              </div>
              <button className="x-button" onClick={deleteItem(todo.id)}>
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))
        ) : (
          <li className="todo-item-container">
            <div className="todo-item">
              <span className="text-light"> No result found ... </span>
            </div>
          </li>
        )}
      </ul>

      <div className="check-all-container">
        <CompleteAllTodos />
        <RemainingItemCount />
      </div>

      <div className="other-buttons-container">
        <TodoFilter />
        <div>
          <ClearTodoCompleted />
        </div>
      </div>
    </>
  );
}

export default TodoList;
