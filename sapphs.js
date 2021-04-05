let sapphs = ['img/logo.png', 'img/logoBlue.png', 'img/logoPurp.png']

class Dot {
    constructor() {
        this.random = Math.random()
        this.x = Math.random() * canvas.width;
        this.y = 0
        this.width = this.random * 533 / 15 + 20
        this.height =this.random * 465 / 15 + 20
        this.weight = this.random * 2 + 0.5
    }
    update() {
        this.y += this.weight
    }
    draw(item) {
        const sapphire = new Image()
        sapphire.src = item
        ctx.drawImage(sapphire, this.x, this.y, this.width, this.height)
       /* ctx.beginPath();
        ctx.fillStyle = color
        ctx.arc(this.x, this.y, this.weight, 0, Math.PI * 2)
        ctx.fill()*/
    }
}

let dotsArr = []
let obstalesArr = []
function init() {
    for (let i = 0; i < 2; i++) {
        dotsArr.push(new Dot)
    }
}
function initO() {
    for (let i = 0; i < 1; i++) {
        obstalesArr.push(new Dot)
    }
}
