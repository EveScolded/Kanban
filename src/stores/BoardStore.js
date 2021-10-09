import { createStore } from "redux";

const boardReducer = (state = {}, action) => {
  const newState = { ...state };

  if (action.type === "INIT") {
    return action.board;
  }

  if (action.type === "SAVE_NEW_TASK") {
    newState.columns[action.columnIndex].taskList.push(action.task);
  }
  if (action.type === "UPDATE_TASK") {
    newState.columns[action.columnIndex].taskList.splice(
      action.taskIndex,
      1,
      action.task
    );
  }
  if (action.type === "DELETE_TASK") {
    newState.columns[action.columnIndex].taskList.splice(action.taskIndex, 1);
  }
  if (action.type === "SAVE_COLUMN") {
    newState.columns.push(action.column);
  }
  if (action.type === "UPDATE_COLUMN") {
    newState.columns.splice(action.columnIndex, 1, action.column);
  }
  if (action.type === "DELETE_COLUMN") {
    newState.columns.splice(action.columnIndex, 1);
  }

  return newState;
};

const boardStore = createStore(boardReducer);

export default boardStore;
