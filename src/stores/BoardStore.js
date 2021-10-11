import { createStore } from "redux";

const boardReducer = (state = {}, action) => {
  const newState = { ...state };

  if (action.type === "INIT") {
    return action.boards;
  }

  let board;
  if (newState.boards) {
    board = newState.boards[newState.currentBoardIndex];
  }

  if (action.type === "SAVE_NEW_BOARD") {
  }

  if (action.type === "SAVE_NEW_TASK") {
    board.columns[action.columnIndex].taskList.push(action.task);
  }
  if (action.type === "UPDATE_TASK") {
    board.columns[action.columnIndex].taskList.splice(
      action.taskIndex,
      1,
      action.task
    );
  }
  if (action.type === "MOVE_TASK") {
    board.columns[action.columnIndex].taskList.splice(action.taskIndex, 1);
    board.columns[action.targetColumnIndex].taskList.push(action.task);
  }
  if (action.type === "MOVE_TASK_UP") {
    if (action.taskIndex > 0) {
      board.columns[action.columnIndex].taskList.move(
        action.taskIndex,
        action.taskIndex - 1
      );
    }
  }
  if (action.type === "MOVE_TASK_DOWN") {
    if (
      action.taskIndex <
      board.columns[action.columnIndex].taskList.length - 1
    ) {
      board.columns[action.columnIndex].taskList.move(
        action.taskIndex,
        action.taskIndex + 1
      );
    }
  }

  if (action.type === "DELETE_TASK") {
    board.columns[action.columnIndex].taskList.splice(action.taskIndex, 1);
  }
  if (action.type === "SAVE_COLUMN") {
    board.columns.push(action.column);
  }
  if (action.type === "UPDATE_COLUMN") {
    board.columns.splice(action.columnIndex, 1, action.column);
  }
  if (action.type === "DELETE_COLUMN") {
    board.columns.splice(action.columnIndex, 1);
  }

  return newState;
};

const boardStore = createStore(boardReducer);

export default boardStore;
