import React from "react";
import "./todoItem.css";

const TodoItem = props => {
  return (
    <li>
      <div className="todo-item-text">{props.todo.value}</div>
      <div className="whitespace" />
      <button
        className="delete-button"
        onClick={() => props.onDelete(props.todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
