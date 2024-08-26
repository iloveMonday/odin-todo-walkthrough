import { compareAsc, format, parseISO, startOfToday } from "date-fns";
import { clearForm } from "./dom-manip";
import { saveToDoToLocal } from "./manage-local-storage";

//create array for ToDo if needed for later
let toDoArray = [];

export const getToDoArray = () => {
    return toDoArray;
}

//Factory function to create todo list
export const createToDo = () => {

    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    //check to see if empty fields exist
    if (Title == "" || Description == "" || DueDate == ""){
        alert("Fill out all the fields please!")
        return;
    }

    //check to see if predate was entered
    if (parseISO(DueDate) < startOfToday()){
        alert("This date has already passed! Enter a valid date. Please.");
        console.log("due date", parseISO(DueDate));
        console.log("date now", startOfToday());
        return;
    }

    //Loop over nodelist for Check List items from the Dom and format to string
    const nodeListChecklist = document.querySelectorAll("li");
    let CheckListArray = [];
    for (let i = 0; i < nodeListChecklist.length; i++){

        //strip off the "x" from the end of each li and push to a temp array
        let strippedCheckList = nodeListChecklist[i].textContent.replace("\u00D7", '');
        CheckListArray.push(strippedCheckList); 
    } 

    //Strip off the checklist array and convert to string with commas
    let CheckList = CheckListArray.join(", ");

    console.log("Called createToDo module... creating todo now");
    console.log({Title, Description, DueDate, Priority, CheckList});
    console.log("Pushing this object to the toDoArray...");
        //TODO: remove below two lines of code if array is not needed
    toDoArray.push({Title, Description, DueDate, Priority, CheckList});
    console.log(toDoArray);

    //call storage module and ush object to local storage
    saveToDoToLocal({Title, Description, DueDate, Priority}, CheckList);

    //Reset the form after successful submission
    clearForm();

    return { Title, Description, DueDate, Priority }, CheckList;
}