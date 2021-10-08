import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Column from "./Column";
import classes from "./Board.module.css";

const Board = (props) => {
  const [addingColumn, setAddingColumn] = useState(false);
  const newColumnInputRef = useRef();

  const dispatch = useDispatch();
  const board = useSelector((state) => state);

  useEffect(() => {
    props.provider.getBoard().then((response) => {
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
    props.provider.saveBoard(board);
  };

  const cancelAddColumn = (e) => {
    e.preventDefault();
    setAddingColumn(false);
  };

  return (
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
          <button className={classes.addColumnBtns} onClick={saveAddColumn}>
            ✔
          </button>
          <button className={classes.addColumnBtns} onClick={cancelAddColumn}>
            ✖
          </button>
        </form>
      )}
    </div>
  );
};

export default Board;
