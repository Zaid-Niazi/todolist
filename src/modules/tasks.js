const taskArray = [];
const taskContainer = document.getElementById("taskcontainer");

class taskObjectMaker {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

function taskArrayPusher(newTaskItem) {
  taskArray.push(newTaskItem);
}

function newTask(title, description, date, priority) {
  const newTaskItem = new taskObjectMaker(title, description, date, priority);
  taskArrayPusher(newTaskItem);
}
function taskMaker(title, description, date, priority) {
  newTask(title, description, date, priority);
  taskListMaker();
}

function formatDate(inputDate) {
  let date = new Date(inputDate);

  let day = date.getDate();
  let month = date.toLocaleString("default", { month: "short" });
  let year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

let receivedDate = "2024-09-21";
let formattedDate = formatDate(receivedDate);

console.log(formattedDate);

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
export { taskMaker, taskContainer };
