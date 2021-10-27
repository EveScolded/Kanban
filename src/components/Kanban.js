import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Board from "./boards/Board";
import classes from "./Kanban.module.css";

const Kanban = (props) => {
  const dispatch = useDispatch();

  const boards = useSelector((state) => state);

  useEffect(() => {
    props.provider.getMyBoards().then((boards) => {
      if (!boards) {
        boards = {
          currentBoardIndex: 0,
          boards: [
            {
              title: "New board",
              columns: [],
            },
          ],
        };
      }
      dispatch({ type: "INIT", boards: boards });
    });
  }, []);

  useEffect(() => {
    if (boards.boards) {
      props.provider.setMyBoards(boards);
    }
  }, [boards]);

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
