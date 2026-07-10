// ======================================================
// Kingdoms of Ash
// main.js
//
// Entry point for the entire game.
// ======================================================

import { Game } from "./game.js";

const canvas = document.getElementById("gameCanvas");
const loading = document.getElementById("loading");

//-------------------------------------------------------
// Canvas Setup
//-------------------------------------------------------

const context = canvas.getContext("2d", {
    alpha: false
});

//-------------------------------------------------------
// Resize Handling
//-------------------------------------------------------

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

//-------------------------------------------------------
// Create Game
//-------------------------------------------------------

const game = new Game(canvas, context);

//-------------------------------------------------------
// Hide Loading Screen
//-------------------------------------------------------

loading.style.display = "none";

//-------------------------------------------------------
// Main Loop
//-------------------------------------------------------

let previousTime = performance.now();

function gameLoop(currentTime) {

    const deltaTime = (currentTime - previousTime) / 1000;

    previousTime = currentTime;

    game.update(deltaTime);

    game.render();

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);
