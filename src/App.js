import Board from "./components/Board";
import classes from "./App.module.css";
import MockBoardProvider from "./dal/MockBoardProvider";

function App() {
  return (
    <div className="App">
      <header className={classes.header}>KANBAN</header>
      <Board provider={new MockBoardProvider()} />
    </div>
  );
}

export default App;
