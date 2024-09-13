import "./style.css";
import { modalCreator, modalRemover } from "./modules/modal";
import newTask from "./modules/tasks";

const main = document.querySelector(".main");
const addTaskButton = document.querySelector(".addbutton");

addTaskButton.addEventListener("click", modalCreator);

function taskAppender() {
  const taskname = document.querySelector(".tasknameinput").value;
  taskListMaker(taskname);
  modalRemover();
}
const taskContainer = document.getElementById("taskcontainer");

function taskListMaker(taskname) {
  const listItem = document.createElement("li");
  const taskItem = document.createElement("input");
  taskItem.setAttribute("type", "radio"), taskItem.setAttribute("id", "radio");

  const label = document.createElement("label");
  label.textContent = taskname;
  label.setAttribute("for", "radio");

  listItem.append(taskItem, label);
  taskContainer.append(listItem);
  main.append(taskContainer);
  newTask(taskname);
}

export { main, taskAppender, taskContainer };
