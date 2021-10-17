export default class MockBoardProvider {
  mockBoards = {
    currentBoardIndex: 0,
    boards: [
      {
        title: "Quite important project",
        columns: [
          {
            title: "TO DO",
            position: 1,
            taskList: [
              { title: "task1", position: 1, description: "hahahaha" },
              { title: "task2", position: 2, description: "hehehehe" },
            ],
          },
          {
            title: "DOING",
            position: 2,
            taskList: [
              { title: "task1", position: 1, description: "hahahaha" },
              { title: "task2", position: 2, description: "hehehehe" },
            ],
          },
        ],
      },
    ],
  };

  getMyBoards() {
    return new Promise((resolve) => {
      // const myBoard = localStorage.getItem("board");
      // if (myBoard) {
      //   resolve(myBoard);
      // } else {
      setTimeout(() => {
        resolve(this.mockBoards);
      }, 300);
      // }
    });
  }

  saveBoard(board) {
    localStorage.setItem("board", JSON.stringify(board));
  }
}
