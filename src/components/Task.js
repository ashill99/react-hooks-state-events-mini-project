import React from "react";

function Task({text, category, onDeleteTask}) {

  function handleClick() {
    onDeleteTask(text)
  }
  return (
    <div className="task" key={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
