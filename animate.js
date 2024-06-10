
console.log("Praise Jesus")



// Title Change
let changeTitle = document.getElementById("title"); // Changed selector to use id attribute

changeTitle.addEventListener("click", updateTitle);

function updateTitle() {
    let title = prompt("Enter a new title");
    if (title !== null) { // Check if user clicked cancel
        changeTitle.textContent = title;
    }
}

function showAlert() {
    alert("Information Entered, thanks!");
}

// Add event listener to the button
let myButton = document.getElementById("myButton");
myButton.addEventListener("click", showAlert);


// Getting Random Colors

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Change background color every 3 seconds (3000 milliseconds)
// setInterval(changeBackgroundColor, 3000);

let changeColorBtn = document.getElementById("changeColorBtn");
changeColorBtn.addEventListener("click", changeBackgroundColor);




// Get all elements with the class "draggable"
let draggables = document.querySelectorAll('.draggable');

// Add dragstart event listener to each draggable element
draggables.forEach(function (draggable) {
    draggable.addEventListener('dragstart', function (event) {
        // Set the data to be dragged (required for Firefox)
        event.dataTransfer.setData('text/plain', null);

        // Store the ID of the dragged element
        event.dataTransfer.setData('text', event.target.id);
    });
});

// Add dragover event listener to allow elements to be dropped on them
document.addEventListener('dragover', function (event) {
    event.preventDefault();
});

// Add drop event listener to handle dropping of elements
document.addEventListener('drop', function (event) {
    event.preventDefault();

    // Get the ID of the dragged element
    let draggedId = event.dataTransfer.getData('text');

    // Get the dragged element
    let draggedElement = document.getElementById(draggedId);

    // Set the new position of the dropped element
    draggedElement.style.left = event.clientX + 'px';
    draggedElement.style.top = event.clientY + 'px';
});
