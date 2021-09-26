import { useState } from "react";
import classes from "./Task.module.css";
import TaskModal from "./TaskModal";

const Task = (props) => {
  const [showModal, setShowModal] = useState(false);

  const editTask = () => {
    setShowModal(true);
  };

  const closeTask = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.taskList}>
      <h4 className={classes.task}>{props.task.title}</h4>
      <button className={classes.editBtn} onClick={editTask}>
        🖊
      </button>
      {showModal && <TaskModal taskCtn={props.task} onClose={closeTask} />}
    </div>
  );
};

export default Task;
