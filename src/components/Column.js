import { useState } from "react";
import classes from "./Column.module.css";
import Task from "./tasks/Task";
import TaskModal from "./tasks/TaskModal";

const Column = (props) => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const addNewTask = (e) => {
    e.preventDefault();
    setShowTaskModal(true);
  };

  const modalClose = (e) => {
    e.preventDefault();
    setShowTaskModal(false);
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
      {showTaskModal && <TaskModal onClose={modalClose} />}
    </div>
  );
};
export default Column;
