var numberOfDrums=document.querySelectorAll("button").length;

for(var i=0;i<numberOfDrums; i++)
{                                                                                 /* this loops addEventListener to all the buttons of drum and when  */
                                                                                  /* they are clicked the annoymus function get executed */
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHtml=this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAmination(buttonInnerHtml);
    
    }  );

}

for(var i=0;i<numberOfDrums;i++){

    document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){

        makeSound(event.key);                                                      /* key is a property of a event keydown which give the alphabet which was pressed */
        
        buttonAmination(event.key);

    });


}





function makeSound(key)
{
    switch (key) {
        case 'w':
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case 'a':
            var kickbass = new Audio("sounds/kick-bass.mp3")
            kickbass.play();
            break;

        case 's':
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;    

        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;

        case 'l':
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        default:console.log(buttonInnerHtml);
            break;
    }
}




function buttonAmination(currentKey){

    var activekey = document.querySelector("."+currentKey);

    activekey.classList.add("pressed");

    setTimeout(function(){activekey.classList.remove("pressed");}, 100);



}






// var playSound= new Audio('sounds/tom-1.mp3');                   /* create new audio object from the name of playsound*/
// playSound.play();