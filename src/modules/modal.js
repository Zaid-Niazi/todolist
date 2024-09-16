import { taskContainer, taskMaker } from "./tasks";
import { projectsArray } from "./projectModal";

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
        <select name="project"  id="project"> 
        
     
       </select>
        <button type='submit' id="modal-button">Add</button>    
        </div>
    `;
  modalAppender(modal);

  projectsListMaker();
}

function projectsListMaker() {
  const projectsDiv = document.querySelector("#project");
  projectsDiv.innerHTML = `<option value="inbox">Inbox</option>`;

  for (let i = 0; i <= projectsArray.length - 1; i++) {
    const listItem = document.createElement("option");
    listItem.textContent = projectsArray[i].name;
    projectsDiv.append(listItem);
  }
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
  const project = document.getElementById("project").value;

  taskMaker(title, description, date, priority, project);
  modalRemover();
}

function modalRemover() {
  const modalElement = document.getElementById("modal");
  taskContainer.removeChild(modalElement);
}

export { modalCreator, modalRemover };
