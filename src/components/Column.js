import { useState, useRef } from "react";
import classes from "./Column.module.css";
import Task from "./tasks/Task";
import TaskModal from "./tasks/TaskModal";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

  const saveNewTask = (taskTitle, taskDescription) => {
    dispatch({
      type: "SAVE_NEW_TASK",
      columnIndex: props.columnIndex,
      task: {
        title: taskTitle,
        position: props.column.taskList.length,
        description: taskDescription,
      },
    });
    setShowTaskModal(false);
  };

  return (
    <div className={classes.column}>
      <h3 className={classes.title}>{props.column.title}</h3>
      {props.column.taskList.map((task, index) => (
        <Task
          columnIndex={props.columnIndex}
          taskIndex={index}
          task={task}
          key={task.position}
        />
      ))}
      <button className={classes.addTaskBtn} onClick={addNewTask}>
        + add new task
      </button>
      {showTaskModal && (
        <TaskModal onClose={modalClose} taskCtn={{}} onSaveTask={saveNewTask} />
      )}
    </div>
  );
};
export default Column;
