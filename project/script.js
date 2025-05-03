const btnStart = document.querySelector('.start')
const buttons = document.querySelector('.match')
const intro = document.querySelector('.intro')
const btnRock = document.querySelector('.rock')
const btnPaper = document.querySelector('.paper')
const btnScissors = document.querySelector('.scissors')
const winner = document.querySelector('.winner')
const score_p = document.querySelector('.score_p')
const score_c = document.querySelector('.score_c')
let scorePlayer = 0
let scorePC = 0
const imgPlayer = document.querySelector('.img_player')
const imgPC = document.querySelector('.img_pc')

btnStart.addEventListener("click", function(){
    console.log(buttons.classList) // classList список классов любого html элемента
    buttons.classList.remove("fadeOut") // удаление класса
    //buttons.classList.add('fadeIn') // добавление класса
    intro.classList.add('fadeOut')
    //btnStart.classList.toggle('change') // добавляет класс если его нет, удаляет если он есть
    //console.log(btnStart.classList)
})
const options = [
    "paper", "rock", "scissors"
]
function selectOption(){
    let number = Math.random() * options.length // Math.random дает рандомное число от 0 до 1
    let randomIndex = Math.floor(number) // Math.floor округляет число до меньшего
    let randomOptions = options[randomIndex] // получили рандомный элемент из массива
    return randomOptions
}
// const result = selectOption()
// console.log(result)

function pcWin(){
    winner.innerHTML = 'компьютер победил'
        scorePC = scorePC + 1
        score_c.innerHTML = scorePC
}

function playerWin(){
    winner.innerHTML = 'игрок победил'
    scorePlayer = scorePlayer + 1
    score_p.innerHTML = scorePlayer
}

btnRock.addEventListener("click", function(){
    imgPlayer.setAttribute("src", "rock.png")
    const comp = selectOption()
    if(comp === 'rock'){
        winner.innerHTML = 'ничья'
        imgPC.setAttribute("src", "rock.png")
    }
    else if(comp === 'paper'){
        imgPC.setAttribute("src", "papper.png")
        pcWin()
    }
    else{
        imgPC.setAttribute("src", "scissors.png")
        playerWin()
    }
})

btnPaper.addEventListener("click", function(){
    imgPlayer.setAttribute("src", "papper.png")
    const comp = selectOption()
    if(comp === 'paper'){
        winner.innerHTML = 'ничья'
        imgPC.setAttribute("src", "papper.png")
    }
    else if(comp === 'scissors'){
        imgPC.setAttribute("src", "scissors.png")
        pcWin()
    }
    else{
        imgPC.setAttribute("src", "rock.png")
        playerWin()
    }
})

btnScissors.addEventListener("click", function(){
    imgPlayer.setAttribute("src", "scissors.png")
    const comp = selectOption()
    if(comp === 'scissors'){
        winner.innerHTML = 'ничья'
        imgPC.setAttribute("src", "scissors.png")
    }
    else if(comp === 'rock'){
        imgPC.setAttribute("src", "rock.png")
        pcWin()
    }
    else{
        playerWin()
        imgPC.setAttribute("src", "papper.png")
    }
})


