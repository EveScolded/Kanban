import React from "react";
import { useState } from "react";
import classes from "./TaskModal.module.css";
import { useSelector } from "react-redux";
import BlueButton from "../UI/BlueButton";

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

  const columns = useSelector((state) => {
    let array = state.columns.map((column, index) => {
      return { title: column.title, index: index };
    });
    array.splice(props.columnIndex, 1);
    return array;
  });

  const moveTask = (targetColumnIndex) => {
    props.onMoveTask(taskTitle, taskDescription, targetColumnIndex);
  };

  return (
    <from>
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
          <BlueButton onClick={saveAddTask}>✔</BlueButton>
          <BlueButton onClick={cancelAddTask}>✖</BlueButton>
          <BlueButton onClick={deleteTask}>Delete</BlueButton>
          <div className={classes.dropdown}>
            <BlueButton>Move to</BlueButton>
            <div className={classes.dropdownContent}>
              {columns.map((column) => (
                <a onClick={() => moveTask(column.index)}>{column.title}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </from>
  );
};

export default TaskModal;
