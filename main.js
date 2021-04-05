let canvas = document.getElementById('canvas1')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth * 0.4
canvas.height = window.innerHeight

let frame = 0;
let score = 0;
let stop;
let gameover = false
let pressed = false;
let left = false
let bg = new Image();
bg.src = 'img/mountain.png'

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
    pressed = true
})
window.addEventListener('keyup', function (e) {
    key = undefined
    pressed = false
})

init()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

    if (key === 'ArrowLeft') {
        if (gameover == false) {
            player.moveLeft()
            left = true;
        }
    } else if (key === 'ArrowRight') {
        if (gameover == false) {
            player.moveRight()
            left = false
        }
    } /*else if (key === 'ArrowUp') {
        player.moveUp()
    } else if (key === 'ArrowDown') {
        player.moveDown()
    }*/

    left == false ? player.draw('img/avatarRight.png') : player.draw('img/avatarLeft.png')
    for (let i = 0; i < dotsArr.length; i++) {
        dotsArr[i].update();
        dotsArr[i].draw('img/logo.png')
    }
    for (let i = 0; i < obstalesArr.length; i++) {
        obstalesArr[i].update();
        obstalesArr[i].draw('img/stone.png')
    }
    if (!pressed) {
        frame % 32 === 0 ? player.x += 6 : ''
        frame % 32 === 16 ? player.x -= 6 : ''
    }
    //ctx.fillStyle = 'white';
    ctx.font = '60px Georgia'
    ctx.lineWidth = '5px'
    ctx.strokeText(score, canvas.width - 100, 60)
    ctx.fillStyle = '#35b5fd'
    ctx.fillText(score, canvas.width - 100, 60)


    collisionDots()
    if (stop == true) {
        return
    }
    requestAnimationFrame(animate)
    frame++
    if (frame % 200 == 0) {
        init()
    }
    if (frame % 380 == 0) {
        initO()
    }

}
animate()

player.onclick = function () {
    console.log('boo')
}
function collisionDots() {
    for (let i = 0; i < dotsArr.length; i++) {
        if (dotsArr[i].y >= canvas.height) {
            dotsArr.splice(i,1)
        }
        if (dotsArr[i].y > (player.y - player.height) &&
            ((player.x > dotsArr[i].x && player.x < dotsArr[i].x + dotsArr[i].width) || 
            player.x + player.width > dotsArr[i].x && dotsArr[i].x > player.x)) {
           
            dotsArr.splice(i, 1)
            score++

        }
    }
    for (let i = 0; i < obstalesArr.length; i++) {

        if (obstalesArr[i].y > (player.y - player.height) &&
            ((player.x > obstalesArr[i].x && player.x < obstalesArr[i].x + obstalesArr[i].width) ||
            player.x + player.width > obstalesArr[i].x && obstalesArr[i].x > player.x)) {
            player.height -= obstalesArr[i].weight *2
            player.y += obstalesArr[i].weight*2
            gameover = true;
            if (player.height < 3) {
                obstalesArr.splice(i, 1)
                stop = true
                gameoverFn()
            }

        }
        if (obstalesArr[i].y >= canvas.height) {
            obstalesArr.splice(i, 1)
        }
    }
}
