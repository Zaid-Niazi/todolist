import { item } from "./item";
const taskContainer = document.getElementById("taskcontainer");
const savedTasks = localStorage.getItem("taskArray");
const taskArray = savedTasks ? JSON.parse(savedTasks) : [];

function taskMaker(title, description, date, priority, project) {
  newTask(title, description, date, priority, project);
  taskListMaker();
}

function newTask(title, description, date, priority, project) {
  const newTaskItem = new taskObjectMaker(
    title,
    description,
    date,
    priority,
    project
  );
  taskArrayPusher(newTaskItem);
}
function taskListMaker() {
  taskContainer.innerHTML = "";

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("taskdiv");
  item(taskDiv);
}

function taskArrayPusher(newTaskItem) {
  taskArray.push(newTaskItem);
  localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

//object control

class taskObjectMaker {
  constructor(title, description, date, priority, project) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }
}

export { taskMaker, taskContainer, taskArray, taskListMaker };
