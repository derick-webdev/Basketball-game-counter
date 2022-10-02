let getScoreHome1 = document.getElementById("score-num1")
let getScoreHome2 = document.getElementById("score-num2")
let getWinner = document.getElementById("winner-banner")

let count1 = 0
let count2 = 0
let score1 = getScoreHome1


function addOneHome() {
    count1 += 1
    getScoreHome1.textContent = count1
}

function addTwoHome() {
    count1 += 2
    getScoreHome1.textContent = count1
}

function addThreeHome() {
    count1 += 3
    getScoreHome1.textContent = count1
}


function addOneGuest() {
    count2 += 1
    getScoreHome2.textContent = count2
}

function addTwoGuest() {
    count2 += 2
    getScoreHome2.textContent = count2
}

function addThreeGuest() {
    count2 += 3
    getScoreHome2.textContent = count2
}

function endGame() {
     if (count1 > count2) {
        getWinner.textContent = "Home team wins!"
    } else if (count1 < count2){
        getWinner.textContent = "Guest team wins!"
    } else {
        getWinner.textContent = "We have a tie!"
    }
}

function newGame() {
    getScoreHome1.textContent = 0
    getScoreHome2.textContent = 0
    getWinner.textContent = ""

    
    count1 = 0
    count2 = 0
}




