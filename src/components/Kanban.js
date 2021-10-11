import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Board from "./Board";

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
      {boards ? (
        <Board boardId={boards.currentBoardIndex} />
      ) : (
        "tu będzie spiner"
      )}
    </>
  );
};
export default Kanban;
