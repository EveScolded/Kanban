import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

export class Board {
  app;
  db;
  auth;
  currentUser;

  constructor(firebaseConfig) {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.auth = getAuth();
  }

  signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider);
  };

  signOut = () => {
    this.auth.signOut();
  };

  getCurrentUser() {
    if (!this.currentUser) {
      this.currentUser = this.auth.currentUser;
    }
    return this.currentUser;
  }

  getMyBoards = async () => {
    const myDoc = doc(this.db, "boards", this.getCurrentUser().uid);
    const snapshot = await getDoc(myDoc);
    const myBoards = snapshot.exists() ? snapshot.data() : null;
    return myBoards;
  };

  setMyBoards = async (boards, currentBoardIndex) => {
    const myDoc = doc(this.db, "boards", this.getCurrentUser().uid);
    await setDoc(myDoc, {
      boards: boards,
      currentBoardIndex: currentBoardIndex,
    });
  };
}
