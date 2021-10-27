import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Column from "../Column";
import classes from "./Board.module.css";
import GreenButton from "../UI/GreenButton";
import BoardTitle from "./BoardTitle";
import SwitchBoard from "./SwitchBoard";

const Board = (props) => {
  const [addingColumn, setAddingColumn] = useState(false);
  const newColumnInputRef = useRef();

  const dispatch = useDispatch();
  const board = useSelector((state) => {
    if (state.boards) return state.boards[props.boardId];
    return null;
  });

  const onSaveNewBoardTitle = (boardTitle) => {
    dispatch({
      type: "UPDATE_BOARD_TITLE",
      newTitle: boardTitle,
    });
  };

  const addNewColumn = () => {
    setAddingColumn(true);
  };

  const saveAddColumn = (e) => {
    e.preventDefault();
    const enteredColumnName = newColumnInputRef.current.value;

    dispatch({
      type: "SAVE_COLUMN",
      column: {
        title: enteredColumnName,
        position: 3,
        taskList: [],
      },
    });

    setAddingColumn(false);
  };

  const cancelAddColumn = (e) => {
    e.preventDefault();
    setAddingColumn(false);
  };

  return (
    <div>
      <div className={classes.boardHeader}>
        <SwitchBoard />
        <BoardTitle
          title={board.title}
          onSaveNewBoardTitle={onSaveNewBoardTitle}
        />
      </div>

      <div className={classes.board}>
        {board &&
          board.columns &&
          board.columns.map((column, index) => (
            <Column column={column} columnIndex={index} key={column.position} />
          ))}
        {!addingColumn && (
          <button className={classes.addBtn} onClick={addNewColumn}>
            + add new column
          </button>
        )}
        {addingColumn && (
          <form className={classes.addColumnForm}>
            <input
              type="text"
              placeholder="enter column name"
              ref={newColumnInputRef}
            />
            <GreenButton
              className={classes.addColumnBtns}
              onClick={saveAddColumn}
            >
              ✔
            </GreenButton>
            <GreenButton
              className={classes.addColumnBtns}
              onClick={cancelAddColumn}
            >
              ✖
            </GreenButton>
          </form>
        )}
      </div>
    </div>
  );
};

export default Board;
