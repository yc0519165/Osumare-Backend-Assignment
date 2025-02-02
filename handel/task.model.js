const tasks = [
  {
    id: 0,
    title: "task 1",
    description: "Go to School",
  },
  {
    id: 1,
    title: "task 2",
    description: "Go to College",
  },
  {
    id: 2,
    title: "task 3",
    description: "Go to Gym",
  },
  {
    id: 3,
    title: "task 4",
    description: "Go to Home",
  },
];

const idCounter = 4;

class Task {
  constructor(title, description) {
    this.id = idCounter++;
    this.title = title;
    this.description = description;
  }
}

module.exports = { tasks, Task };
