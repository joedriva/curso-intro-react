import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {


  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`TodoItem-p ${props.completed && 'todoItem-p--completed'}`}
      >
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };