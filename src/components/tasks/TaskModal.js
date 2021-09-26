import React from "react";
import classes from "./TaskModal.module.css";

const TaskModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.overlay}></div>
      <div className={classes.modal}>
        <h5>{props.taskCtn.title}</h5>
        <p>{props.taskCtn.description}</p>
        <button className={classes.closeBtn} onClick={props.onClose}>
          Save
        </button>
      </div>
    </React.Fragment>
  );
};

export default TaskModal;
