function startGame(){

    document.getElementById("playerName").innerHTML = prompt("Empieza el juego! Como te llamas?", "Pepe Honguito")
    document.getElementById("board").style.display = "flex"
    document.getElementById("startGameButton").innerHTML = "Reiniciar juego"
    document.getElementById("startGameButton").setAttribute("onclick", "reStartGame()")

    mixCards()
    
}

function reStartGame(){
    score = 0
    misses = 0

    document.getElementById("score").innerHTML = score
    document.getElementById("misses").innerHTML = misses


    for(let i = 0; i < picks.length; i++){
        picks.splice(0, picks.length)
    }

    for(let i = 0; i < cards.length; i++){
        turnBack("card" + (i + 1))
    }

    document.getElementById("playerName").innerHTML = prompt("Empieza el juego! Como te llamas?", "Pepe Honguito")

    setTimeout( () =>{
        mixCards()
    }, 500)
}


let score = 0
let misses = 0

let cards = [
    "images/elefante.png",
    "images/elefante.png",
    "images/jirafa.png",
    "images/jirafa.png",
    "images/perro.png",
    "images/perro.png",
    "images/ciervo.png",
    "images/ciervo.png",
    "images/ardilla.png",
    "images/ardilla.png",
    "images/mono.png",
    "images/mono.png"
    ]

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

function mixCards(){

    for(let i = 0; i <= cards.length - 1; i++){
        let indexNumber = getRandomNumber(0, 12)
        let temp = cards[i]
        cards[i] = cards[indexNumber]
        cards[indexNumber] = temp
    }

    for(let i = 0; i <= cards.length - 1; i++){
        document.getElementById("cardFront" + (i + 1)).innerHTML = '<img src="' + cards[i] + '" class="image" />'
        document.getElementById("cardBack" + (i + 1)).innerHTML = '<img src="images/carta.png" onclick="pickCards(' + (i + 1) +')" class="image" />'
        
    }

}

function turnFront(id){
    document.getElementById(id).style.transform = "rotateY(180deg)"
}

function turnBack(id){
    document.getElementById(id).style.transform = "rotateY(360deg)"
}

let picks = []

function pickCards(id){
    
    let pick = document.getElementById("card" + id)

    if(picks.length === 0){
        turnFront("card" + id)
        picks[0] = pick
    }
    else if(picks.length === 1){
        turnFront("card" + id)
        picks[1] = pick

        comparePicks(picks[0], picks[1])
    }
}

function comparePicks(pick1, pick2){

    if(pick1.getElementsByClassName("cardFront")[0].innerHTML === pick2.getElementsByClassName("cardFront")[0].innerHTML){
        
        score +=1
        document.getElementById("score").innerHTML = score
    }
    else{
        setTimeout(() => {
            turnBack(pick1.getAttribute("id"),
            turnBack(pick2.getAttribute("id")))
        }, 1000);
        
        misses +=1
        document.getElementById("misses").innerHTML = misses
    }

    
    for(let i = 0; i < picks.length; i++){
        picks.splice(0, picks.length)
    }
    
}