import "./style.css";
import { modalCreator, modalRemover } from "./modules/modal";
import { taskMaker } from "./modules/tasks";

const main = document.querySelector(".main"); // No functionality for now
const addTaskButton = document.querySelector(".addbutton");

addTaskButton.addEventListener("click", modalCreator);

function taskAppender() {
  const title = document.querySelector(".tasknameinput").value;
  const description = document.querySelector(".taskdescription").value;
  const date = document.querySelector(".duedate").value;
  const priority = document.getElementById("priority").value;

  taskMaker(title, description, date, priority);
  modalRemover();
}

export { main, taskAppender };
