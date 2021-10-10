import { useState, useEffect } from "react";
import classes from "./Column.module.css";
import Task from "./tasks/Task";
import TaskModal from "./tasks/TaskModal";
import { useDispatch } from "react-redux";

const Column = (props) => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [editColumn, setEditColumn] = useState(false);
  const [columnTitle, setColumnTitle] = useState(props.column.title);

  const addNewTask = () => {
    setShowTaskModal(true);
  };

  const modalClose = () => {
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
    props.onSaveBoard();
  };

  const editColumnHandler = (e) => {
    e.preventDefault();
    setEditColumn(true);
  };

  const changeColumnTitle = (event) => {
    setColumnTitle(event.target.value);
  };

  const saveChangeTitle = () => {
    dispatch({
      type: "UPDATE_COLUMN",
      columnIndex: props.columnIndex,
      column: {
        title: columnTitle,
        position: props.column.length,
        taskList: props.column.taskList,
      },
    });
    setEditColumn(false);
    props.onSaveBoard();
  };

  const cancelChangeTitle = () => {
    setEditColumn(false);
  };

  const deleteColumn = () => {
    dispatch({
      type: "DELETE_COLUMN",
      columnIndex: props.columnIndex,
    });
    props.onSaveBoard();
  };

  return (
    <div className={classes.column}>
      <div>
        {!editColumn && (
          <div className={classes.header}>
            <h3 className={classes.title}>{props.column.title}</h3>
            <button className={classes.editBtn} onClick={editColumnHandler}>
              🖊
            </button>
          </div>
        )}
        {editColumn && (
          <div>
            <input
              type="text"
              //className={classes.titleInput}
              value={columnTitle}
              onChange={changeColumnTitle}
              //ref={props.taskNameRef}
            ></input>
            <button className={classes.editColumnBtn} onClick={saveChangeTitle}>
              ✔
            </button>
            <button
              className={classes.editColumnBtn}
              onClick={cancelChangeTitle}
            >
              ✖
            </button>
            <button className={classes.editColumnBtn} onClick={deleteColumn}>
              Delete
            </button>
          </div>
        )}
      </div>
      {props.column.taskList.map((task, index) => (
        <Task
          columnIndex={props.columnIndex}
          taskIndex={index}
          onSaveBoard={props.onSaveBoard}
          task={task}
          key={task.title}
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
