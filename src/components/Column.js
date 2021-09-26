//import { useState } from "react";
import classes from "./Column.module.css";
import Task from "./tasks/Task";

const Column = (props) => {
  const addNewTask = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.column}>
      <h3 className={classes.title}>{props.column.title}</h3>
      {props.column.taskList.map((task) => (
        <Task task={task} key={task.position} />
      ))}
      <button className={classes.addTaskBtn} onClick={addNewTask}>
        + add new task
      </button>
    </div>
  );
};
export default Column;
