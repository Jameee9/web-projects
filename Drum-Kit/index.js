// Declaration
let drumButton = document.querySelectorAll(".drum");
var audioTom1 = new Audio("sounds/tom-1.mp3");
var audioTom2 = new Audio("sounds/tom-2.mp3");
var audioTom3 = new Audio("sounds/tom-3.mp3");
var audioTom4 = new Audio("sounds/tom-4.mp3");
var audioSnare = new Audio("sounds/snare.mp3");
var audioCrash = new Audio("sounds/crash.mp3");
var audioKick = new Audio("sounds/kick-bass.mp3");

drumButton.forEach(function(drum) {
    drum.addEventListener("click", function() {
        let key = this.innerHTML;
        switch (key) {
            case "W":
                audioTom1.play();
                break;
            case "A":
                audioTom2.play();
                break;

            case "S":
                audioTom3.play();
                break;

            case "D":
                audioTom4.play();
                break;

            case "J":
                audioSnare.play();
                break;

            case "K":
                audioCrash.play();
                break;  

            case "L":
                audioKick.play();
                break;     

            default:
                console.log(key)
                break;
        }
        this.classList.add("pressed");
        setTimeout(() => {
        this.classList.remove("pressed");
        }, 150);
    });
});

document.addEventListener("keypress", function(event){
    soundKey(event.key);
    buttonAnimation(event.key);
});

function soundKey(key) {
    switch (key) {
        case "w":
            audioTom1.play();
            break;
        case "a":
            audioTom2.play();
            break;

        case "s":
            audioTom3.play();
            break;

        case "d":
            audioTom4.play();
            break;

        case "j":
            audioSnare.play();
            break;

        case "k":
            audioCrash.play();
            break;  

        case "l":
            audioKick.play();
            break;     

        default:
            console.log(key)
            break;
    }
};

function buttonAnimation(currentKey) {
    var active = document.querySelector("." + currentKey)
    active.classList.add("pressed");
    setTimeout(() => {
        active.classList.remove("pressed");
    }, 250);
    
}
    


