const main = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add("div");
        main.appendChild(div);
    }
}