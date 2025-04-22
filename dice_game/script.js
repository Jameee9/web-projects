function replay(){
    window.location.reload();
} 

let randomNumber1 = Math.floor(Math.random() * 6 + 1)
console.log(randomNumber1)

let randomNumber2 = Math.floor(Math.random() * 6 + 1)
console.log(randomNumber2)

if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else if (randomNumber1 === 6) {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
} else {
    console.log("Error in selecting random")
}

if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else if (randomNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
} else {
    console.log("Error in selecting random")
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerText = "Player 1 wins!";    
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerText = "Player 2 wins!";   
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h2").innerText = "DRAW!";   
} else {
    document.querySelector("h2").innerText = "Refresh the page" ;
}