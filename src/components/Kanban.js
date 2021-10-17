import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Board from "./boards/Board";
import classes from "./Kanban.module.css";

const Kanban = (props) => {
  const dispatch = useDispatch();

  const boards = useSelector((state) => state);

  useEffect(() => {
    props.provider.getMyBoards().then((boards) => {
      dispatch({ type: "INIT", boards: boards });
    });
  }, []);

  return (
    <>
      {boards && boards.boards ? (
        <Board boardId={boards.currentBoardIndex} provider={props.provider} />
      ) : (
        <div className={classes.loader}></div>
      )}
    </>
  );
};
export default Kanban;
