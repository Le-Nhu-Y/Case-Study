//Gọi lớp Bird vừa gọi ra hình ảnh khung Canvas
let bird = new Bird(10, 10, 50, 50)
bird.draw();
window.addEventListener("keydown", (e) => {
    //bat su kien khi an nut an ban phim
    console.log(e.code)
    if (e.code === "ArrowUp") {
        bird.moveTop()
    }
})
let pipe1 = new Pipe(1000, -50, 50, 200)
let pipe2 = new Pipe(1000, 300, 50, 200)
let pipe3 = new Pipe(600, 0, 50, 200)
let pipe4 = new Pipe(600, 350, 50, 200)
pipe1.draw()
pipe2.draw()
pipe3.draw()
pipe4.draw()

function main() {  //Tạo hàm để chim và ống di chuyển
    bird.moveDown();
    pipe1.moveLeft();
    pipe2.moveLeft();
    pipe3.moveLeft();
    pipe4.moveLeft();
    requestAnimationFrame(main)  // su dung ham  requestAnimationFrame( ) de con chim lap di lap lai
}
 // GAME OVER
function gameOver() {

    if (bird.y + bird.height === 500 || bird.y + bird.height === 50
        || bird.y <= 150 && bird.x + bird.width === pipe1.x
        || bird.y <= 200 && bird.x + bird.width === pipe3.x

        || bird.y + bird.height >= 300 && bird.x + bird.width >= pipe2.x
        || bird.y + bird.height >= 350 && bird.x + bird.width >= pipe4.x
    ) {
        alert('GAME OVER')
    }
}

main();


