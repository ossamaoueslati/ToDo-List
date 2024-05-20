const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById('submitButton');

const addTask = () => {
    if (inputBox.value === '') {
        alert("You must write a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

const showTasks = () => {
    listContainer.innerHTML = localStorage.getItem("data");
};

showTasks();

// Attach an event listener to the input box element
inputBox.addEventListener("keyup", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        // Simulate a click on the button
        button.click();
    }
});

button.addEventListener("click", function () {
    addTask();
});
