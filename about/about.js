let sapph1 = '../img/logo2.png'
let sapph2 = '../img/logoBlue2.png'
let sapph3 = '../img/logoPurp2.png'

let frame = 0

let sapphs = [sapph1, sapph2, sapph3]

let decorTop = document.getElementById('decorTop')

window.addEventListener('load', function () {
    let numofSapphs = (window.innerWidth * 2 + window.innerHeight * 2) / 50

    for (let i = 0; i < numofSapphs; i++) {
        let sapphImg = document.createElement('img')
        switch (true) {
            case (i % 3 == 1):
                sapphImg.src = sapph1;
                break;
            case (i % 3 == 2):
                sapphImg.src = sapph2;
                break;
            case (i % 3 == 0):
                sapphImg.src = sapph3;
                break;
        }
        sapphImg.style.left = -45 * i + 'px'
        sapphImg.style.top = 0

        decorTop.append(sapphImg)
    }
    let topImgs = document.querySelectorAll('#decorTop img')
    function moveRight(el, i) {
        el.style.left = window.innerWidth - 45 + 'px'
        el.style.transitionDelay = i
    }
    function moveBottom(el) {
        el.style.top = window.innerHeight - 45 + 'px'
        el.style.transitionDelay = 0
    }
    function moveLeft(el) {
        el.style.left = 0
    }
    function moveTop(el) {
        el.style.top = 0
    }
    function animate() {
        /*for (let i = 0; i < topImgs.length; i++) {
            let left = topImgs[i].getBoundingClientRect().left
            let top = topImgs[i].getBoundingClientRect().top
            
            if (left <= 0 && top == 0) {
                topImgs[i].style.transitionDuration = 10 + i/4 + 's'
                moveRight(topImgs[i], 0)
            }
            if (left >= window.innerWidth - 45) {
                topImgs[i].style.transitionDuration = '10s'
                moveBottom(topImgs[i])
            }
            if (top == window.innerHeight - 45) {
                topImgs[i].style.transitionDuration = '10s'
                topImgs[i].transitionDelay = 0
                moveLeft(topImgs[i])
            }
            if (top == window.innerHeight - 45 && left == 0) {
                topImgs[i].style.transitionDuration = '10s'
                topImgs[i].transitionDelay = 0
                moveTop(topImgs[i])
            }
            if (frame > 600) {
                topImgs[i].transitionDelay = 0 + '!important'
            }
        }*/
        requestAnimationFrame(animate)
        console.log(frame)
        frame++
    }
    animate()
    
   
})
