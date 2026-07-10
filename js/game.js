// ======================================================
// Kingdoms of Ash
// Game Class
// ======================================================

export class Game {

    constructor(canvas, context) {

        this.canvas = canvas;
        this.ctx = context;

        this.elapsed = 0;

    }

    //-----------------------------------------------------

    update(deltaTime) {

        this.elapsed += deltaTime;

    }

    //-----------------------------------------------------

    render() {

        const ctx = this.ctx;

        // Sky background
        ctx.fillStyle = "#6aa7d8";
        ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        // Ground
        ctx.fillStyle = "#4d8c3b";
        ctx.fillRect(
            0,
            this.canvas.height * 0.65,
            this.canvas.width,
            this.canvas.height * 0.35
        );

        // Title
        ctx.fillStyle = "white";

        ctx.font = "40px Trebuchet MS";

        ctx.fillText(
            "KINGDOMS OF ASH",
            40,
            70
        );

        ctx.font = "20px Trebuchet MS";

        ctx.fillText(
            "Engine running successfully",
            42,
            105
        );

        ctx.fillText(
            `Canvas: ${this.canvas.width} × ${this.canvas.height}`,
            42,
            140
        );

        ctx.fillText(
            `Time: ${this.elapsed.toFixed(1)} s`,
            42,
            175
        );

    }

}
