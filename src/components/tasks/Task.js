import { useState, useRef } from "react";
import classes from "./Task.module.css";
import TaskModal from "./TaskModal";
import { useDispatch } from "react-redux";
import "array.prototype.move";
import EditButton from "../UI/EditButton";

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

  const moveTask = (taskTitle, taskDescription, targetColumnIndex) => {
    dispatch({
      type: "MOVE_TASK",
      columnIndex: props.columnIndex,
      taskIndex: props.taskIndex,
      targetColumnIndex: targetColumnIndex,
      task: {
        title: taskTitle,
        position: props.task.position,
        description: taskDescription,
      },
    });
    props.onSaveBoard();
  };

  const moveTaskUp = () => {
    dispatch({
      type: "MOVE_TASK_UP",
      columnIndex: props.columnIndex,
      taskIndex: props.taskIndex,
    });
    props.onSaveBoard();
  };

  const moveTaskDown = () => {
    dispatch({
      type: "MOVE_TASK_DOWN",
      columnIndex: props.columnIndex,
      taskIndex: props.taskIndex,
    });
    props.onSaveBoard();
  };

  return (
    <div className={classes.taskList}>
      <h4 className={classes.task}>{props.task.title}</h4>
      <div>
        <button className={classes.editBtn} onClick={moveTaskUp}>
          🡅
        </button>
        <button className={classes.editBtn} onClick={moveTaskDown}>
          🡇
        </button>
        <EditButton onClick={editTask}>🖊</EditButton>
      </div>

      {showModal && (
        <TaskModal
          taskCtn={props.task}
          onClose={closeTask}
          columnIndex={props.columnIndex}
          onSaveTask={saveTask}
          onDeleteTask={deleteTask}
          onMoveTask={moveTask}
          taskNameRef={newTaskNameInputRef}
          taskDescriptionRef={newTaskDescriptionInputRef}
        />
      )}
    </div>
  );
};

export default Task;
