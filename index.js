let row = '16';
let column = '16';
const main = document.querySelector(".container");
function createGrid(row, column) {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const div = document.createElement('div');
            div.classList.add("div");
            main.appendChild(div);
        }
    }
    addHover();
}
createGrid(row, column);

let colorful = false;  // Declare it globally as a boolean

const colofulbtn = document.querySelector(".btn2");
colofulbtn.addEventListener('click', () => {
    colorful = true;  // Set it to true when the button is clicked
});

function randomColor() {
    let r = (Math.random() * 256).toFixed(2);
    let g = (Math.random() * 256).toFixed(2);
    let b = (Math.random() * 256).toFixed(2);
    return `rgb(${r},${g},${b})`;
}


function addHover() {
    const divs = document.querySelectorAll(".container div");
    divs.forEach(div => {
        // on mouse enter change color based on the value of 'colorful'
        div.addEventListener('mouseenter', () => {
            if (colorful === true) {
                div.style.backgroundColor = randomColor() ;  // Use pink if 'colorful' is true
            }
            else {
                div.style.backgroundColor = 'black';  // Use black if 'colorful' is false
            }
        });
    });
}


const resetColor = document.querySelector(".btn1");
resetColor.addEventListener('click', () => {
    const divs = document.querySelectorAll("div");
    divs.forEach(div => {
        div.style.removeProperty('background-color');
    });
    colorful = false;
});

const popup = document.querySelector(".btn");
popup.addEventListener('click', () => {
    let gridsize = parseInt(prompt("Enter the number of grids"));
    while (gridsize > 100 || isNaN(gridsize)) {
        gridsize = parseInt(prompt("Please enter a number less than 100"));
    }
    row = gridsize;
    column = gridsize;
    createGrid(gridsize, gridsize);
});
