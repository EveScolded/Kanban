import React from "react";
import { useState, useRef } from "react";
import classes from "./TaskModal.module.css";

const TaskModal = (props) => {
  const [taskTitle, setTaskTitle] = useState(props.taskCtn.title);
  const [taskDescription, setTaskDescription] = useState(
    props.taskCtn.description
  );

  const saveAddTask = (e) => {
    e.preventDefault();
  };
  const cancelAddTask = (e) => {
    e.preventDefault();
    props.onClose();
  };

  const changeTitle = (event) => {
    setTaskTitle(event.target.value);
  };

  const changeDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  return (
    <from>
      <div className={classes.overlay}></div>
      <div className={classes.modal}>
        <label>Task title</label>
        <input
          type="text"
          className={classes.titleInput}
          value={taskTitle}
          onChange={changeTitle}
        ></input>

        <label>Task description</label>
        <input
          type="text"
          className={classes.descriptionInput}
          value={taskDescription}
          onChange={changeDescription}
        ></input>

        <div>
          <button className={classes.addTaskBtns} onClick={saveAddTask}>
            ✔
          </button>
          <button className={classes.addTaskBtns} onClick={cancelAddTask}>
            ✖
          </button>
        </div>
      </div>
    </from>
  );
};

export default TaskModal;
