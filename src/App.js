import classes from "./App.module.css";
import { BoardsProvider } from "./dal/BoardsProvider";
import { useState } from "react";
import GreenButton from "./components/UI/GreenButton";
import Kanban from "./components/Kanban";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtq-wAg6dzBCQYVI4Wkt3-_5e7qcmvytg",
  authDomain: "kanban-f9914.firebaseapp.com",
  projectId: "kanban-f9914",
  storageBucket: "kanban-f9914.appspot.com",
  messagingSenderId: "273849008084",
  appId: "1:273849008084:web:bd4ccc18e119db93216041",
};

const provider = new BoardsProvider(firebaseConfig);

function App() {
  const [user] = useAuthState(provider.auth);

  const loggingToGoogle = () => {
    provider.signInWithGoogle();
  };
  return (
    <div>
      <h1 className={classes.header}>KANBAN</h1>
      {!user && (
        <div className={classes.buttonConteiner}>
          <GreenButton onClick={loggingToGoogle}>
            Sign in with Google account
          </GreenButton>
        </div>
      )}
      {user && <Kanban provider={provider} />}
    </div>
  );
}

export default App;
