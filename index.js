

for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var button_clicked = this.innerHTML
        got_clicked(button_clicked)
        buttonCSS(button_clicked)
        
    })
}

document.addEventListener("keydown", function (event) {
    got_clicked(event.key)
    buttonCSS(event.key)
    
})

function got_clicked(key){

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            var audio = new Audio();
            audio.play();

            break;
    }
    
}

function buttonCSS(key_you_clicked){
    var activeButton = document.querySelector("."+key_you_clicked)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)

}



/*function HouseKeeper (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.cleaning = function (){
        alert("cleaning in progress")
    }
}

var house =  new HouseKeeper("Maya", 19, true, ["english", "hindi"])
house.cleaning*/
