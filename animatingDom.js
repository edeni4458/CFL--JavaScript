let changeName = document.getElementById("name"); // Changed selector to use id attribute
let nameChange = document.getElementById("nameChange");


changeName.addEventListener("click", updateName);

function updateName() {
    let name = prompt("Enter a new name");
    if (name !== null) { // Check if user clicked cancel
        nameChange.textContent = name;
    }
}

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
setInterval(changeBackgroundColor, 10000);

let changeColorBtn = document.getElementById("bg-Color-Change");
changeColorBtn.addEventListener("click", changeBackgroundColor);