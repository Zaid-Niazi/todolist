import { main } from "..";
import { taskListMaker } from "./tasks";

const projectsArray = [];
let currentTab = "inbox";

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
  projectsDiv.innerHTML = "<li class='default'>inbox</li>";
  const defaultTab = document.querySelector(".default");
  defaultTab.addEventListener("click", changeTab);

  for (let i = 0; i <= projectsArray.length - 1; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = projectsArray[i].name;
    listItem.addEventListener("click", changeTab);
    projectsDiv.append(listItem);
  }
}

function changeTab(e) {
  const container = document.getElementById("taskcontainer");
  const taskDivs = container.querySelectorAll(".taskdiv");

  taskDivs.forEach((taskDiv) => {
    taskDiv.remove();
  });

  currentTab = e.target.textContent;
  taskListMaker();
}

// project class

class Project {
  constructor(name) {
    this.name = name;
  }
}

export { projectModal, projectsArray, currentTab };
