import { useState, useRef } from "react";
import classes from "./Task.module.css";
import TaskModal from "./TaskModal";
import { useDispatch } from "react-redux";

const Task = (props) => {
  const [showModal, setShowModal] = useState(false);
  const newTaskNameInputRef = useRef();
  const newTaskDescriptionInputRef = useRef();

  const dispatch = useDispatch();

  const editTask = () => {
    setShowModal(true);
  };

  const closeTask = () => {
    setShowModal(false);
  };

  const saveTask = (taskTitle, taskDescription) => {
    dispatch({
      type: "UPDATE_TASK",
      columnIndex: props.columnIndex,
      taskIndex: props.taskIndex,
      task: {
        title: taskTitle,
        position: props.task.position,
        description: taskDescription,
      },
    });
    setShowModal(false);
    props.onSaveBoard();
  };

  const deleteTask = () => {
    dispatch({
      type: "DELETE_TASK",
      columnIndex: props.columnIndex,
      taskIndex: props.taskIndex,
    });
    props.onSaveBoard();
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
          columnIndex={props.columnIndex}
          onSaveTask={saveTask}
          onDeleteTask={deleteTask}
          taskNameRef={newTaskNameInputRef}
          taskDescriptionRef={newTaskDescriptionInputRef}
        />
      )}
    </div>
  );
};

export default Task;
