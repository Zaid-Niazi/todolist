import "./style.css";
import modalCreator from "./modules/modal";

const main = document.querySelector(".main");
const addTaskButton = document.querySelector(".addbutton");

addTaskButton.addEventListener("click", modalCreator);

export { main };
