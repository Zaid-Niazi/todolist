import { formatDate } from "./utils.js";
const taskArray = [];
const taskContainer = document.getElementById("taskcontainer");

function taskMaker(title, description, date, priority) {
  newTask(title, description, date, priority);
  taskListMaker();
}

function newTask(title, description, date, priority) {
  const newTaskItem = new taskObjectMaker(title, description, date, priority);
  taskArrayPusher(newTaskItem);
}
function taskListMaker() {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("taskdiv");
  for (let i = 0; i < taskArray.length; i++) {
    const listItem = document.createElement("li");

    const taskItem = document.createElement("input");
    const taskDescription = document.createElement("div");
    taskItem.setAttribute("type", "radio"),
      taskItem.setAttribute("id", `radio-${i}`);

    const label = document.createElement("label");
    label.textContent = taskArray[i].title;
    const prioritySpan = document.createElement("span");
    prioritySpan.setAttribute("id", "prioritySpan");
    prioritySpan.textContent = taskArray[i].priority;
    const date = formatDate(taskArray[i].date);
    taskDescription.innerHTML = `${taskArray[i].description} <br>
                                 <span id ='date'>${date}</span>`;
    label.setAttribute("for", `radio-${i}`);
    taskDescription.classList.add("description");

    listItem.append(taskItem, label, taskDescription);
    taskDiv.innerHTML = "";
    taskDiv.append(listItem, prioritySpan);
    taskContainer.append(taskDiv);
  }
  console.log(taskArray);
}

function taskArrayPusher(newTaskItem) {
  taskArray.push(newTaskItem);
}

//object control

class taskObjectMaker {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

export { taskMaker, taskContainer };
