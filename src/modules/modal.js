import { main, taskAppender, taskContainer } from "../index";
import { newTask, taskArray } from "./tasks";
const modal = document.createElement("div");

function modalCreator() {
  modal.classList.add(".modal");
  modal.innerHTML = `
      <div class="modal-content">
        <input class="tasknameinput" placeholder="Task Name">
        <span class="close-btn">&times;</span>
        <p>Dynamic content for the modal</p>
        <button type='submit' id="modal-button">Add</button>
      
        </div>
    `;
  modalAppender();
}

function modalAppender() {
  taskContainer.appendChild(modal);
  modalDom();
}

function modalDom() {
  const closeButton = document.querySelector(".close-btn");
  const addButton = document.querySelector("#modal-button");

  addButton.addEventListener("click", taskAppender);
  closeButton.addEventListener("click", modalRemover);
}

function modalRemover() {
  taskContainer.removeChild(modal);
}

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

  for (let i = 0; i < taskArray.length; i++) {
    console.log(taskArray[i].taskName);
  }
}

export { modalCreator, modalRemover, taskListMaker };
