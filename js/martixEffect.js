const canvas = document.querySelector("#matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//create random
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];
for (let y = 0; y < columns; y++) {
    drops[y] = canvas.height;
}

function draw() {
    
    //draw background
    ctx.fillStyle = "#0002";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    //draw text 
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px";
    for (let i = 0; i < columns; i++) {
        const text = String.fromCharCode(0x0400 + random(0,96));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(draw, 50);