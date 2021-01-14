import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks, onDeleteTask}) {

  // const [list, setList ] = useState(tasks)

  // function handleDelete(id) {
    // console.log(id)
    // const newList = list.filter((task) => task.text !== id)
    // setList(newList)
    //   }

  const taskList = tasks.map((task) => {
    return <Task 
      key={task.text} 
      text={task.text} 
      category={task.category}
      tasks={tasks}
      onDeleteTask={onDeleteTask}
      />
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
