let canvas = document.getElementById('canvas1')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth * 0.4
canvas.height = window.innerHeight

let frame = 0;
let score = 0;
let stop;
let bg = new Image();
bg.src = 'img/space1.png'
//let numOfDots = 1

//ctx.fillStyle = 'green';
ctx.beginPath();
ctx.moveTo(0, canvas.height - 20);
ctx.lineTo(canvas.width, canvas.height - 20)
ctx.stroke()

const player = new Player()

let key= undefined
window.addEventListener('keydown', function (e) {
   key = e.code
})
window.addEventListener('keyup', function (e) {
    key = undefined
})

init()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
    player.draw()
    for (let i = 0; i < dotsArr.length; i++) {
        dotsArr[i].update();
        dotsArr[i].draw('img/logo.png')
    }
    for (let i = 0; i < obstalesArr.length; i++) {
        obstalesArr[i].update();
        obstalesArr[i].draw('img/stone.png')
    }
    //ctx.fillStyle = 'white';
    ctx.font = '60px Georgia'
    ctx.lineWidth = '5px'
    ctx.strokeText(score, canvas.width - 50, 70)
    ctx.fillStyle = '#35b5fd'
    ctx.fillText(score, canvas.width - 50, 70)

    if (key === 'ArrowLeft') {
        player.moveLeft()
    } else if (key === 'ArrowRight') {
        player.moveRight()
    } else if (key === 'ArrowUp') {
        player.moveUp()
    } else if (key === 'ArrowDown') {
        player.moveDown()
    }

    collisionDots()
    if (stop == true) {
        return
    }
    requestAnimationFrame(animate)
    frame++
    if (frame % 180 == 0) {
        init()
    }
    if (frame % 350 == 0) {
        initO()
    }

}
animate()

function collisionDots() {
    for (let i = 0; i < dotsArr.length; i++) {
        if (dotsArr[i].y >= canvas.height) {
            dotsArr.splice(i,1)
        }
        if (dotsArr[i].y > (player.y - player.height) &&
            ((dotsArr[i].x + dotsArr[i].width > player.x && dotsArr[i].x + dotsArr[i].width < player.x + player.width) ||
            (dotsArr[i].x > player.x && dotsArr[i].x < player.x + player.width ))) {
           
            dotsArr.splice(i, 1)
            score++

        }
    }
    for (let i = 0; i < obstalesArr.length; i++) {

        if (obstalesArr[i].y > (player.y ) &&
            ((obstalesArr[i].x + obstalesArr[i].width > player.x && obstalesArr[i].x + obstalesArr[i].width < player.x + player.width) ||
                (obstalesArr[i].x > player.x && obstalesArr[i].x < player.x + player.width))) {

            obstalesArr.splice(i, 1)
            stop = true
        }
        if (obstalesArr[i].y >= canvas.height) {
            obstalesArr.splice(i, 1)
        }
    }
}
