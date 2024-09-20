import { formatDate } from "./utils.js";
import { taskArray, taskContainer } from "./tasks.js";
import { currentTab } from "./projectModal.js";

function item(taskDiv) {
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].project === currentTab) {
      const listItem = document.createElement("li");
      const taskItem = document.createElement("input");
      const label = document.createElement("label");
      const taskDescription = document.createElement("div");
      const prioritySpan = document.createElement("span");
      const date = formatDate(taskArray[i].date);
      const individualItem = document.createElement("div");

      taskItem.setAttribute("type", "radio"),
        taskItem.setAttribute("id", `radio-${i}`);
      label.setAttribute("for", `radio-${i}`);
      taskDescription.classList.add("description");
      prioritySpan.setAttribute("id", "prioritySpan");
      individualItem.setAttribute("id", `item-${i}`);

      label.textContent = taskArray[i].title;
      prioritySpan.textContent = taskArray[i].priority;
      taskDescription.innerHTML = `${taskArray[i].description} <br>
                                 <span id ='date'>${date}</span>`;

      listItem.append(taskItem, label, taskDescription);
      individualItem.append(listItem, prioritySpan);
      taskDiv.innerHTML = "";
      taskDiv.append(individualItem);
      taskContainer.append(taskDiv);
    }
  }
}
export { item };
