import React from "react";

function Task({tasks, text, category, handleDelete}) {
  // const [list, setList ] = useState([])

//   function handleDelete(id) {
// console.log(id)
// const newList = tasks.filter((task) => task.text !== id)
// setList(newList)
//   }

  return (
    <div className="task" key={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(text)}>X</button>
    </div>
  );
}

export default Task;
