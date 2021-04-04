class Player {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 50;
        this.width = 58/2
        this.height = 93/2
    }
    moveLeft() {
        this.x -= 3
        if (this.x <= 0) {
            this.x = 0
        }
    }
    moveRight() {
        this.x += 3
        if (this.x + this.width >= canvas.width) {
            this.x = canvas.width - this.size
        }
    }
    moveUp() {
        this.y -= 3
        if (this.y + this.height <= 0) {
            this.y = 0
        }
    }
    moveDown() {
        this.y += 3
        if (this.y + this.height >= canvas.height) {
            this.y = canvas.height - this.height
        }
    }
    draw() {
        const avatar = new Image();
        avatar.src = 'img/avatarRight.png'
        ctx.drawImage(avatar, this.x, this.y, this.width,this.height)
    }
}



