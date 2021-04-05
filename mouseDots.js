let canvasMain = document.getElementById('canvasMain')
let ctxMain = canvasMain.getContext('2d')
canvasMain.width = window.innerWidth * 0.6
canvasMain.height = window.innerHeight

let hue = 0;
let mouse = {
    x: null,
    y:null
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
        this.color = 'hsl(' + hue + ',100%,50%)'

    }
    update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.size > 0.2) {
            this.size -= 0.17;
        }
    }
    draw() {
        ctxMain.fillStyle = this.color
        //ctxMain.fillRect(this.x,this.y,this.size,this.size)
        ctxMain.beginPath();
        ctxMain.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctxMain.fill();
    }
}

function init() {
    for (let i = 0; i < 50; i++) {
        mouseDots.push(new MouseDot)
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
    if (mouseDots.length < 1) {
        mouse.x = Math.random() * canvasMain.width
        mouse.y = Math.random() * canvasMain.height
        for (let i = 0; i < 1700; i++) {
            
            mouseDots.push(new MouseDots)
        }
    }
    requestAnimationFrame(animateMouse)
    hue +=2
}
animateMouse()