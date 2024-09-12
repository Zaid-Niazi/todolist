import { main } from "../index";
const modal = document.createElement("div");

function modalCreator() {
  modal.classList.add(".modal");
  modal.innerHTML = `
      <div class="modal-content">
        <input class="tasknameinput" placeholder="Task Name">
        <span class="close-btn">&times;</span>
        <p>Dynamic content for the modal</p>
        <button id="modal-button">Click me</button>
      </div>
    `;
  main.appendChild(modal);
  const closeButton = document.querySelector(".close-btn");

  closeButton.addEventListener("click", removeModal);
}

function removeModal(event) {
  main.removeChild(modal);
}

export default modalCreator;
