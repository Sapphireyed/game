let replay = document.getElementById('replay')

function gameoverFn() {
    if (gameover == true) {
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'red'
        ctx.font = '90px Georgia'
        ctx.fillText("Game Over", canvas.width * 0.15, canvas.height * 0.4)
        ctx.fillStyle = 'white'
        ctx.font = '40px Georgia'
        ctx.fillText('Your score is: ' + score, canvas.width * 0.2, canvas.height * 0.4 + 80)
        replay.style.display = 'block'
    }
  
}
