import "./style.css";
import { modalCreator, modalRemover } from "./modules/modal";
import { taskListMaker } from "./modules/modal";

const main = document.querySelector(".main");
const addTaskButton = document.querySelector(".addbutton");

addTaskButton.addEventListener("click", modalCreator);

function taskAppender() {
  const taskname = document.querySelector(".tasknameinput").value;
  taskListMaker(taskname);
  modalRemover();
}
const taskContainer = document.getElementById("taskcontainer");

export { main, taskAppender, taskContainer };
