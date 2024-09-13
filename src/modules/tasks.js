import { taskListMaker } from "./modal";
const taskArray = [];
class taskObjectMaker {
  constructor(taskName) {
    this.taskName = taskName;
  }
}

function taskArrayPusher(newTaskItem) {
  taskArray.push(newTaskItem);
}

function newTask(name) {
  const newTaskItem = new taskObjectMaker(name);
  taskArrayPusher(newTaskItem);
}

export { newTask, taskArray };
