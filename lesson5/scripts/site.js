// Create three variables that hold references to the input, button, and list elements using const.

const chapterInput = document.querySelector("#favchap");
const addButton = document.querySelector("main button");
const chapterList = document.querySelector("#list");

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.  

addButton.addEventListener('click', () => {

    if (chapterInput.value == ""){
        return;
    }
    
    let newListItem = document.createElement("li");

    let deleteButton = document.createElement("button");
    newListItem.textContent = chapterInput.value;

    deleteButton.textContent = '❌'
    newListItem.appendChild(deleteButton);

    chapterList.appendChild(newListItem);

    deleteButton.addEventListener("click", () => {

        newListItem.remove();
    })

    chapterInput.focus();
    chapterInput.value = "";

// populate the button textContent with an ❌
// append the li element with the delete button
// append the list element with the li element just created and appended with text and the delete button
// add an event listener to the delete button that removes the li element when clicked
// send the focus to the input element
// change the input value to nothing or the empty string to clean up the interface for the user

})


