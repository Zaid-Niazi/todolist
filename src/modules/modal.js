import { main, taskAppender } from "../index";
import { taskContainer } from "./tasks";
const modal = document.createElement("div");

function modalCreator() {
  modal.classList.add(".modal");
  modal.innerHTML = `
      <div class="modal-content">
        <input class="tasknameinput" placeholder="Title">
        <input class="taskdescription" placeholder="Description">
        <input class="duedate" type='date'>
       <label for="priority">Priority</label>
        <select name="priority"  id="priority">
        <option value="low">Low</option>
        <option value="med">Medium</option>
        <option value="high">High</option>
       </select>
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

export { modalCreator, modalRemover };
