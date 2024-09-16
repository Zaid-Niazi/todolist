import { main } from "..";

const projectsArray = [];

function projectModal() {
  const pModal = document.createElement("div");
  pModal.setAttribute("id", "pmodal");
  pModal.classList.add(".pmodal");

  pModal.innerHTML = `    
        <input class="projectnameinput" placeholder="Enter Project Name">
        <button type='submit' id="pmodal-button">Create</button>     
    `;

  pModalAppender(pModal);
}

function pModalAppender(pModal) {
  main.appendChild(pModal);
  pModalDom(pModal);
}

function pModalDom() {
  const pmodCreate = document.getElementById("pmodal-button");
  pmodCreate.addEventListener("click", pModCreator);
}

function pModCreator() {
  const projectName = document.querySelector(".projectnameinput").value;
  const newProject = new Project(projectName);
  pModalArrayPusher(newProject);
  pModalRemover();
}

function pModalArrayPusher(projectName) {
  projectsArray.push(projectName);
  sidebarAppender();
}

function pModalRemover() {
  const pmodal = document.querySelector("#pmodal");
  main.removeChild(pmodal);
}

function sidebarAppender() {
  const projectsDiv = document.querySelector(".projectscontainer");
  projectsDiv.innerHTML = "";

  for (let i = 0; i <= projectsArray.length - 1; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = projectsArray[i].name;
    projectsDiv.append(listItem);
  }
}

// project class

class Project {
  constructor(name) {
    this.name = name;
  }
}

export { projectModal, projectsArray };
