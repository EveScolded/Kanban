import Board from "./components/Board";
import classes from "./App.module.css";
import MockBoardProvider from "./dal/MockBoardProvider";
import { useState } from "react";

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
          <button className={classes.signInBtn} onClick={loggingToGoogle}>
            Sign in with Google account
          </button>
        </div>
      )}
      {logIn && <Board provider={new MockBoardProvider()} />}
    </div>
  );
}

export default App;
