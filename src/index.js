import './style.css';
import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm, displayToDo } from "./dom-manip";
import { blankProjectLoad } from "./blank-project-load";
import { createToDo } from "./create-to-do";

//call blankProjectLoad on load
blankProjectLoad();

//call DOM Manip module to control UI

//displayToDo on land
displayToDo(); 

//click event to submit new form to project
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", createToDo);
submitButton.addEventListener("click", clearForm); //why is this here

//TODO: click event module here for todo and project creation
let clickEventsModule = (function() {
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToCheckList);

    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);
})();

//call create-to-do.js module file and apply some objects