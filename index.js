let row = 16;
let column = 16;
const main = document.querySelector(".container");
// dynamicaly creating grids
function createGrid(row, column) {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    // Adjust the container's width to fit the number of columns
    main.style.width = `${column * 70}px`;  // Adjust based on the size of each div (60px + gap + padding)
    // Create the grid items
    for (let i = 0; i < row * column; i++) {
        const div = document.createElement('div');
        div.classList.add("div");
        main.appendChild(div);
    }
    addHover();
}
createGrid(row, column);

let colorful = false;

//To enable colorful drawing
const colofulbtn = document.querySelector(".btn2");
colofulbtn.addEventListener('click', () => {
    colorful = true;
});

function randomColor() {
    let r = (Math.random() * 256).toFixed(2);
    let g = (Math.random() * 256).toFixed(2);
    let b = (Math.random() * 256).toFixed(2);
    return `rgb(${r},${g},${b})`;
}

//To create the drawing effect
function addHover() {
    const divs = document.querySelectorAll(".container div");
    divs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            if (colorful === true) {
                div.style.backgroundColor = randomColor();
            } else {
                div.style.backgroundColor = 'black';
            }
        });
    });
}

//Reset everything upon click at reset
const resetColor = document.querySelector(".btn1");
resetColor.addEventListener('click', () => {
    const divs = document.querySelectorAll("div");
    divs.forEach(div => {
        div.style.removeProperty('background-color');
    });
    colorful = false;
});

//Prompt user for number of grid they want to have
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
