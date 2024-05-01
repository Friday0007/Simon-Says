let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "blue"];

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 3) + 1;
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}