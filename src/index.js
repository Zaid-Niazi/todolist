import "./style.css";
import { modalCreator } from "./modules/modal";
import { projectModal } from "./modules/projectModal";

const main = document.querySelector(".main"); // No functionality for now
const addTaskButton = document.querySelector(".addbutton");
const newProject = document.querySelector(".newproject");

addTaskButton.addEventListener("click", modalCreator);
newProject.addEventListener("click", projectModal);

export { main };
