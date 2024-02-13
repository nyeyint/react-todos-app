import React from 'react';

function TodoFilter(props) {
  const filterButtons = ['all', 'active', 'completed'];
  const filterButtonClass = (filter) =>
    `button filter-button ${
      props.filter === filter ? 'filter-button-active' : ''
    }`;

  return (
    <div>
      {filterButtons.map((filter) => (
        <button
          key={filter}
          className={filterButtonClass(filter)}
          onClick={() => props.setFilter(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
