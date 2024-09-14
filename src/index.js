import "./style.css";
import { modalCreator } from "./modules/modal";

const main = document.querySelector(".main"); // No functionality for now
const addTaskButton = document.querySelector(".addbutton");

addTaskButton.addEventListener("click", modalCreator);

export { main };
