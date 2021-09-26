export default class MockBoardProvider {
  mockBoard = {
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
  };

  getBoard() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          json: () => Promise.resolve(this.mockBoard),
        });
      }, 500);
    });
  }
}
