import React from "react";

const Todo = props => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={props.toggleTodo}
      />
      <span>{props.todo.text}</span>
      <button onClick={props.removeTodo}>delete</button>
    </div>
  );
};

export default Todo;
