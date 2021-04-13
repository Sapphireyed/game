let color = ['rgba(0,0,255,.8)', 'rgba(255,255,255,.8)', 'silver', 'darkblue']
class dotBg {
    constructor() {
        this.x = Math.random() * canvasMain.width
        this.y = Math.random() * canvasMain.height
        this.size = Math.random() * 3 + 2
        this.speedX = (Math.random() - 0.5) * this.size/4
        this.speedY = (Math.random() - 0.5) *this.size/4
        this.color = color[Math.floor(Math.random() * color.length)]
    }
    draw() {
        ctxMain.fillStyle = this.color
        ctxMain.beginPath();
        ctxMain.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctxMain.closePath();
        ctxMain.fill()
    }
    shrink() {
        this.size <= 0.5 ? this.size = 0.5 : this.size -= 0.1
    }
    grow() {
        this.size >= 8 ? this.size = 2.5 : this.size += 0.1
    }
    move() {
        this.x += this.speedX
        this.y += this.speedY
        let dx = this.x - mouse.x
        let dy = this.y - mouse.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let force = (mouse.radius - distance) / mouse.radius
        if (distance < mouse.radius) {
            this.x += forceDirectionX * force * this.size
            this.y += forceDirectionY * force * this.size
        }
    }
}

let dotsBgArr = []
function initBg() {
    for (let i = 0; i < 120; i++) {
        dotsBgArr.push(new dotBg)
    }
}
let small;
initBg()
function animateBg() {
    ctxMain.fillStyle = 'rgba(0,0,0,.1)'
    ctxMain.fillRect(0,0,canvasMain.width, canvasMain.height)
    for (let i = 0; i < dotsBgArr.length; i++) {
        dotsBgArr[i].move()
        if (dotsBgArr[i].x < 0 || dotsBgArr[i].x > canvasMain.width || dotsBgArr[i].y < 0 || dotsBgArr[i].y > canvasMain.height) {
            dotsBgArr.splice(i, 1)
            dotsBgArr.push(new dotBg)
        }
        if (frame % 30 === 0) {
            if (dotsBgArr[i].size >= 4.5) {
                small = false
            } else {
                small = true
            }
        }
        small == true ? dotsBgArr[i].grow() : dotsBgArr[i].shrink()
        dotsBgArr[i].draw()
    }
    requestAnimationFrame(animateBg)
}
animateBg()
