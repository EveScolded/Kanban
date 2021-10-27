import GreenButton from "../UI/GreenButton";
import { useSelector, useDispatch } from "react-redux";
import classes from "./SwitchBoard.module.css";

const SwitchBoard = (props) => {
  const boards = useSelector((state) => state.boards);

  const dispatch = useDispatch();

  const addNewBoard = () => {
    dispatch({
      type: "SAVE_NEW_BOARD",
      board: {
        title: "New board",
        columns: [],
      },
    });
  };

  const switchBoard = (index) => {
    dispatch({
      type: "SWITCH_BOARD",
      newIndex: index,
    });
  };

  return (
    <div className={classes.dropdown}>
      <GreenButton>Switch board</GreenButton>
      <div className={classes.dropdownContent}>
        {boards.map((board, index) => (
          <a onClick={() => switchBoard(index)}>{board && board.title}</a>
        ))}
        <button onClick={addNewBoard}>+ add new board</button>
      </div>
    </div>
  );
};

export default SwitchBoard;
