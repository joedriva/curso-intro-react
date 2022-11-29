import React from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoSearch.css';

function TodoSearch() {

const {searchValue, setSearchValue} = React.useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      placeholder="Digite el Todo que desea buscar"
      value={searchValue} />
  );
}

export { TodoSearch };