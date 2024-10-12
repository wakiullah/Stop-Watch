let minute = document.querySelector('.hour')
let second = document.querySelector('.minutes')
let strat = document.querySelector('.strat')
let reset = document.querySelector('.Reset')
let pause = document.querySelector('.pause')
let ifalse = false
let sec = 0
let min = 0

function starts() {
    if (!ifalse) {
        ifalse = true
        timer = setInterval(function() {
            sec++
            if (sec === 60) {
                min++
                sec = 0
            }

            if (sec < 10) {
                second.innerText = `0${sec}`
            } else {
                second.innerText = sec
            }

            if (min < 10) {
                minute.innerText = `0${min}`
            } else {
                minute.innerText = min
            }

        }, 1000)
    }
}

function pauses() {
    ifalse = false
    clearInterval(timer)
}

function resets() {
    ifalse = false
    clearInterval(timer)
    min = 0
    sec = 0
    minute.innerText = `00`
    second.innerText = `00`
}

strat.addEventListener('click', starts)
pause.addEventListener('click', pauses)
reset.addEventListener('click', resets)

function starting() {
    if (!ifalse) {
        ifalse = true
        time = setInterval(function() {
            sec++
            if (sec < 10) {
                second.innerText = `0${sec}`
            } else {
                second.innerText = sec
            }
            if (sec === 60) {
                min = min + 1
                sec = 0
            }
            if (min < 10) {
                minute.innerText = `0${min}`
            } else {
                minute.innerText = min
            }
        }, 100)
    }
}

function reseting() {
    ifalse = false
    clearInterval(time)
    second.innerText = '00'
    minute.innerText = '00'
}

function pauseing() {
    ifalse = false
    clearInterval(time)
}

strat.addEventListener('click', starting)
reset.addEventListener('click', reseting)
