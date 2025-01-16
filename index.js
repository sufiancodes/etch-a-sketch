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

function addHover() {
    const divs = document.querySelectorAll(".container div");
divs.forEach(div => {
    //on mouse enter change color
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'red';
    });
    // on leave remove the color added
    div.addEventListener('mouseleave', () => {
        div.style.removeProperty('background-color');  // Remove the inline style to reset to the CSS color
    });
});
}

const popup = document.querySelector(".btn");
popup.addEventListener('click', () => {
    let gridsize = prompt("Enter the number of grids");
    while (gridsize > 100) {
        gridsize = prompt("Please enter something less than 100");
    }
    row = gridsize;
    column = gridsize;
    createGrid(gridsize, gridsize);
});
