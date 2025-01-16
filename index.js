const main = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add("div");
        main.appendChild(div);
    }
}
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
const popup = document.querySelector(".btn");
popup.addEventListener('click', () => {
    let gridsize = prompt("Enter the number of grids");
    while (gridsize > 100) {
        gridsize = prompt("Please enter something less than 100");
    }
});
