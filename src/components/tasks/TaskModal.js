import React from "react";
import { useState } from "react";
import classes from "./TaskModal.module.css";

const TaskModal = (props) => {
  const [taskTitle, setTaskTitle] = useState(props.taskCtn.title);
  const [taskDescription, setTaskDescription] = useState(
    props.taskCtn.description
  );

  const saveAddTask = (e) => {
    e.preventDefault();
    props.onSaveTask(taskTitle, taskDescription);
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
    <from className={classes.form}>
      <div className={classes.overlay}></div>
      <div className={classes.modal}>
        <label className={classes.label}>Task title</label>
        <input
          type="text"
          className={classes.titleInput}
          value={taskTitle}
          onChange={changeTitle}
          ref={props.taskNameRef}
        ></input>

        <label className={classes.label}>Task description</label>
        <textarea
          type="text"
          className={classes.descriptionInput}
          value={taskDescription}
          onChange={changeDescription}
          ref={props.taskDescriptionRef}
        ></textarea>

        <div className={classes.addTaskBtnsContainer}>
          <button className={classes.addTaskBtn} onClick={saveAddTask}>
            ✔
          </button>
          <button className={classes.addTaskBtn} onClick={cancelAddTask}>
            ✖
          </button>
        </div>
      </div>
    </from>
  );
};

export default TaskModal;
