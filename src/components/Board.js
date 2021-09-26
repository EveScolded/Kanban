import { useState, useEffect, useRef } from "react";
import Column from "./Column";
import classes from "./Board.module.css";

//title, position, taskList <---columnList

const Board = (props) => {
  const [board, setBoard] = useState(null);
  const [addingColumn, setAddingColumn] = useState(false);
  const newColumnInputRef = useRef();

  useEffect(() => {
    props.provider.getBoard().then((response) => {
      response.json().then(setBoard);
    });
  }, []);

  const addNewColumn = () => {
    setAddingColumn(true);
  };

  const saveAddColumn = (e) => {
    e.preventDefault();
    const enteredColumnName = newColumnInputRef.current.value;

    const newBoard = { ...board };
    newBoard.columns.push({
      title: enteredColumnName,
      position: 3,
      taskList: [],
    });
    setBoard(newBoard);

    setAddingColumn(false);
  };

  const cancelAddColumn = (e) => {
    e.preventDefault();
    setAddingColumn(false);
  };

  return (
    <div className={classes.board}>
      {board &&
        board.columns.map((column) => (
          <Column column={column} key={column.position} />
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
