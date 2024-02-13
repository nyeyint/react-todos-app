import React from 'react';
import RemainingItemCount from './RemainingItemCount';
import ClearTodoCompleted from './ClearTodoCompleted';
import CompleteAllTodos from './CompleteAllTodos';
import TodoFilter from './TodoFilter';

function TodoList(props) {
  return (
    <>
      <ul className="todo-list">
        {props.todosFiltered(props.filter).length ? (
          props.todosFiltered(props.filter).map((todo) => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input
                  type="checkbox"
                  onChange={() => props.toogleCompleted(todo.id)}
                  checked={todo.isCompleted}
                />
                {todo.isEditing && (
                  <input
                    autoFocus
                    type="text"
                    className="todo-item-input"
                    defaultValue={todo.text}
                    onBlur={(e) => props.handleUpdate(e, todo.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        props.toogleEditing(todo.id);
                      }
                      if (e.key === 'Enter') {
                        props.handleUpdate(e, todo.id);
                      }
                    }}
                  />
                )}
                {!todo.isEditing && (
                  <span
                    className={`todo-item-label ${
                      todo.isCompleted ? 'line-through' : ''
                    }`}
                    onDoubleClick={() => props.toogleEditing(todo.id)}
                  >
                    {todo.text}
                  </span>
                )}
              </div>
              <button className="x-button" onClick={props.deleteItem(todo.id)}>
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
        <CompleteAllTodos completeAllTodos={props.completeAllTodos} />
        <RemainingItemCount remaining={props.remaining} />
      </div>

      <div className="other-buttons-container">
        <TodoFilter filter={props.filter} setFilter={props.setFilter} />
        <div>
          <ClearTodoCompleted clearTodoCompleted={props.clearTodoCompleted} />
        </div>
      </div>
    </>
  );
}

export default TodoList;
