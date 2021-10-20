import classes from "./BoardTitle.module.css";
import EditButton from "../UI/EditButton";
import { useState, useEffect } from "react";
import GreenButton from "../UI/GreenButton";

const BoardTitle = (props) => {
  const [editBoardTitle, setEdtiBoardTitle] = useState(false);
  const [boardTitle, setBoardTitle] = useState(props.title);

  useEffect(() => {
    setBoardTitle(props.title);
  }, [props.title]);

  const editBoardTitleHandler = () => {
    setEdtiBoardTitle(true);
  };

  const changeBoardTitle = (event) => {
    setBoardTitle(event.target.value);
  };
  const saveChangeTitle = () => {
    props.onSaveNewBoardTitle(boardTitle);
    setEdtiBoardTitle(false);
  };
  const cancelChangeTitle = () => {
    setEdtiBoardTitle(false);
  };

  return (
    <>
      {editBoardTitle ? (
        <div className={classes.boardTitleContainer}>
          <input
            className={classes.input}
            type="text"
            value={boardTitle}
            onChange={changeBoardTitle}
          ></input>
          <GreenButton onClick={saveChangeTitle}>✔</GreenButton>
          <GreenButton onClick={cancelChangeTitle}>✖</GreenButton>
          <GreenButton //onClick={deleteColumn}
          >
            Delete
          </GreenButton>
        </div>
      ) : (
        <div className={classes.boardTitleContainer}>
          <h2 className={classes.boardTitle}>{boardTitle}</h2>
          <EditButton onClick={editBoardTitleHandler}>🖊</EditButton>
        </div>
      )}
    </>
  );
};
export default BoardTitle;
