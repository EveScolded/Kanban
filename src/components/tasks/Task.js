import { useState, useRef } from "react";
import classes from "./Task.module.css";
import TaskModal from "./TaskModal";

const Task = (props) => {
  const [showModal, setShowModal] = useState(false);
  const newTaskNameInputRef = useRef();
  const newTaskDescriptionInputRef = useRef();

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
      {showModal && (
        <TaskModal
          taskCtn={props.task}
          onClose={closeTask}
          // onSaveTask={saveNewTask}
          taskNameRef={newTaskNameInputRef}
          taskDescriptionRef={newTaskDescriptionInputRef}
        />
      )}
    </div>
  );
};

export default Task;
