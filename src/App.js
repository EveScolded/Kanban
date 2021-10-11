import Board from "./components/Board";
import classes from "./App.module.css";
import MockBoardProvider from "./dal/MockBoardProvider";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GreenButton from "./components/UI/GreenButton";
import Kanban from "./components/Kanban";

const provider = new MockBoardProvider();

function App() {
  const [logIn, setLogIn] = useState(false);

  const loggingToGoogle = () => {
    setLogIn(true);
  };
  return (
    <div>
      <h1 className={classes.header}>KANBAN</h1>
      {!logIn && (
        <div className={classes.buttonConteiner}>
          <GreenButton onClick={loggingToGoogle}>
            Sign in with Google account
          </GreenButton>
        </div>
      )}
      {logIn && <Kanban provider={provider} />}
    </div>
  );
}

export default App;
