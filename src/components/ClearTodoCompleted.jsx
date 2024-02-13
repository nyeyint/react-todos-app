import React from 'react';

function ClearTodoCompleted(props) {
  return (
    <button className="button" onClick={props.clearTodoCompleted}>
      Clear completed
    </button>
  );
}

export default ClearTodoCompleted;
