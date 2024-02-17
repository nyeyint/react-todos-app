import React, { useContext } from 'react';
import TodosContext from '../context/TodosContext';

function TodoFilter(props) {
  const { filter, setFilter } = useContext(TodosContext);

  const filterButtons = ['all', 'active', 'completed'];
  const filterButtonClass = (currentFilter) =>
    `button filter-button ${filter === currentFilter ? 'filter-button-active' : ''}`;

  return (
    <div>
      {filterButtons.map((filter) => (
        <button
          key={filter}
          className={filterButtonClass(filter)}
          onClick={() => setFilter(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
