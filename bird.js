class Bird {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')

    }

    draw() {
        let img = document.getElementById("bird");
        this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }

    moveDown() {  // Di chuyen chim tu roi xuong 2px
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.y += 2;
        this.draw();
        gameOver()
    }

    moveTop() {   //Chim bay len 40px
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.y -= 40;
        this.draw();
    }
}
