import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Column from "./Column";
import classes from "./Board.module.css";
import GreenButton from "./UI/GreenButton";

const Board = (props) => {
  const [addingColumn, setAddingColumn] = useState(false);
  const newColumnInputRef = useRef();

  const dispatch = useDispatch();
  const board = useSelector((state) => state);

  useEffect(() => {
    props.provider.getBoard().then((response) => {
      response.json().then((board) => {
        dispatch({ type: "INIT", board: board });
      });
    });
  }, []);

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
    saveBoardToStorage();
  };

  const saveBoardToStorage = () => {
    props.provider.saveBoard(board);
  };

  const cancelAddColumn = (e) => {
    e.preventDefault();
    setAddingColumn(false);
  };

  return (
    <div>
      <div className={classes.boardHeader}>
        <GreenButton>Switch board</GreenButton>
        <div className={classes.dropdownBoardsList}>{<a>{}</a>}</div>
        <h2 className={classes.boardTitle}>{board.title}</h2>
      </div>

      <div className={classes.board}>
        {board &&
          board.columns &&
          board.columns.map((column, index) => (
            <Column
              column={column}
              onSaveBoard={saveBoardToStorage}
              columnIndex={index}
              key={column.position}
            />
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
