let canvasMain = document.getElementById('canvasMain')
let ctxMain = canvasMain.getContext('2d')
canvasMain.width = window.innerWidth * 0.6
canvasMain.height = window.innerHeight

let hue = 180;
let brig = 30
let mouse = {
    x: null,
    y: null,
    radius: 150
}

let mouseDots = []


window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y
    for (let i = 0; i < 29; i++) {
        mouseDots.push(new MouseDots);
    }
})


class MouseDots {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 2.7 - 1.5;
        this.speedY = Math.random() * 2.7 - 1.5;
        this.color = 'hsla(' + hue + ',100%,' + brig + '%)'

    }
    update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.size > 0.07) {
            this.size -= 0.07;
        }
        if (this.size < 0.07) {
            this.size = 0
        }
    }
    draw() {
        ctxMain.fillStyle = this.color
        //ctxMain.fillRect(this.x,this.y,this.size,this.size)
        ctxMain.beginPath();
        ctxMain.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctxMain.fill();

        /*ctxMain.beginPath();
        ctxMain.fillStyle = 'white'
        ctxMain.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 1.5, true);
        ctxMain.fill();*/
    }
}




function animateMouse() {
    ctxMain.fillStyle = 'rgba(0,0,0,.1)'
    ctxMain.fillRect(0,0,canvasMain.width, canvasMain.height)
    for (let i = 0; i < mouseDots.length; i++) {
        mouseDots[i].update();
        mouseDots[i].draw()
        if (mouseDots.length > 1700) {
            mouseDots.splice(i,1)
        }
    }
    requestAnimationFrame(animateMouse)
    hue += 4
    brig += 0.3
    if (brig >= 70) {
        brig = 30
    }

}
animateMouse()