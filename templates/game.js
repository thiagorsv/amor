const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let y = 150;
let velocity = 0;
let gravity = 0.5;

function drawHeart(x, y) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();
}

function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    velocity += gravity;
    y += velocity;

    drawHeart(100, y);

    requestAnimationFrame(update);
}

document.addEventListener("touchstart", () => {
    velocity = -10;
});

update();