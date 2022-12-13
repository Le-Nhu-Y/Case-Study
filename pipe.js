let score = 0;

class Pipe {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
    }

    moveLeft() {
        this.x -= 5;
        this.draw();
        if (this.x === -10) {
            this.x = 1000;

            score++;
            document.getElementById("score").innerHTML = "Score: " + score / 2

        }
    }

    draw() {
        let img = document.getElementById("pipe");
        this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }
}
