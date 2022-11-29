import React from "react";

import { TodoContext } from '../../Context/TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from "../modal";
import { TodoForm } from "../TodoForm";

import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';

function AppUI() {

    const {
        error,
        loading,
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchTodos.length) && <TodosEmpty />}
                {searchTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

// const value = React.useContext(TodoContext);

//     return (
//         <React.Fragment>
//             <TodoCounter />
//             <TodoSearch />
//             <TodoContext.Consumer>
//                 {({
//                     error,
//                     loading,
//                     searchTodos,
//                     completeTodo,
//                     deleteTodo
//                 }) => (
//                     <TodoList>
//                         {error && <p>Error</p>}
//                         {loading && <p>Estamos cargando</p>}
//                         {(!loading && !searchTodos.length) && <p>primer todo</p>}
//                         {searchTodos.map(todo => (
//                             <TodoItem
//                                 key={todo.text}
//                                 text={todo.text}
//                                 completed={todo.completed}
//                                 onComplete={() => completeTodo(todo.text)}
//                                 onDelete={() => deleteTodo(todo.text)}
//                             />
//                         ))}
//                     </TodoList>
//                 )}
//             </TodoContext.Consumer>
//             <CreateTodoButton />
//         </React.Fragment>
//     );
// }

export { AppUI };