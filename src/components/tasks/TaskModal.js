import React from "react";
import { useState } from "react";
import classes from "./TaskModal.module.css";
import { useSelector } from "react-redux";

const TaskModal = (props) => {
  const [taskTitle, setTaskTitle] = useState(props.taskCtn.title);
  const [taskDescription, setTaskDescription] = useState(
    props.taskCtn.description
  );

  const saveAddTask = () => {
    props.onSaveTask(taskTitle, taskDescription);
  };

  const cancelAddTask = () => {
    props.onClose();
  };

  const deleteTask = () => {
    props.onDeleteTask();
  };

  const changeTitle = (event) => {
    setTaskTitle(event.target.value);
  };

  const changeDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const columnTitles = useSelector((state) =>
    state.columns.map((column) => column.title)
  );

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

        <div className={classes.modalTaskBtnsContainer}>
          <button className={classes.modalTaskBtn} onClick={saveAddTask}>
            ✔
          </button>
          <button className={classes.modalTaskBtn} onClick={cancelAddTask}>
            ✖
          </button>
          <button className={classes.modalTaskBtn} onClick={deleteTask}>
            Delete
          </button>
          <div className={classes.dropdown}>
            <button className={classes.modalTaskBtn}>Move to</button>
            <div className={classes.dropdownContent}>
              {columnTitles.map((title) => (
                <a>{title}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </from>
  );
};

export default TaskModal;
