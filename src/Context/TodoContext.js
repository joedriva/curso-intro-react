import React from "react";

import { useLocalStorage } from './useLocalStorage'


const TodoContext = React.createContext();

function TodoProvider(props) {


    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    let searchTodos = [];

    if (searchValue.length === 0) {
        searchTodos = todos
    }
    else {
        searchTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const completedTodos = searchTodos.filter(todo => todo.completed).length;
    const totalTodos = searchTodos.length;


    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text
        });
        saveTodos(newTodos);

    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if (todoIndex !== -1) {
            newTodos[todoIndex].completed = !todos[todoIndex].completed;
            saveTodos(newTodos);
        }

    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if (todoIndex !== -1) {
            newTodos.splice(todoIndex, 1)
            saveTodos(newTodos);
        }

    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }