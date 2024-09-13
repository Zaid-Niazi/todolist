import { main, taskAppender, taskContainer } from "../index";
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

export { modalCreator, modalRemover };
