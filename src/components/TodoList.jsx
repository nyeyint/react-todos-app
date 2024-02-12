import React from 'react';

function TodoList(props) {
  return (
    <>
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <li className="todo-item-container" key={todo.id}>
            <div className="todo-item">
              <input
                type="checkbox"
                defaultChecked={todo.isCompleted}
                onChange={() => props.toogleCompleted(todo.id)}
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
        ))}
      </ul>

      <div className="check-all-container">
        <div>
          <div className="button">Check All</div>
        </div>
        <span>3 items remaining</span>
      </div>

      <div className="other-buttons-container">
        <div>
          <button className="button filter-button filter-button-active">
            All
          </button>
          <button className="button filter-button">Active</button>
          <button className="button filter-button">Completed</button>
        </div>
        <div>
          <button className="button">Clear completed</button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
