class taskObjectMaker {
  constructor(taskName) {
    this.taskName = taskName;
  }
}

function newTask(name) {
  const newTaskItem = new taskObjectMaker(name);
  console.log(newTaskItem);
}

export default newTask;
