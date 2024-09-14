import { taskContainer, taskMaker } from "./tasks";

function modalCreator() {
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
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
  modalAppender(modal);
}

function modalAppender(modal) {
  taskContainer.appendChild(modal);
  modalDom(modal);
}

function modalDom(modal) {
  const closeButton = modal.querySelector(".close-btn");
  const addButton = modal.querySelector("#modal-button");

  addButton.addEventListener("click", taskAppender);
  closeButton.addEventListener("click", modalRemover);
}

function taskAppender() {
  const title = document.querySelector(".tasknameinput").value;
  const description = document.querySelector(".taskdescription").value;
  const date = document.querySelector(".duedate").value;
  const priority = document.getElementById("priority").value;

  taskMaker(title, description, date, priority);
  modalRemover();
}

function modalRemover() {
  const modalElement = document.getElementById("modal");
  taskContainer.removeChild(modalElement);
}

export { modalCreator, modalRemover };
