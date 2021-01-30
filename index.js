var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    buttonAnimation(this.innerHTML);
    clickHandle(this.innerHTML);

  }); //the function we call with event listener shouldn't have parenthesis
}


function clickHandle(innerHTML) {
  switch (innerHTML) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    default:
      console.log(innerHTML);

  }
  button.style.color = "white";
  console.log(button.innerHTML);

}

function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}

document.addEventListener("keydown", function(event) {
  buttonAnimation(event.key);
  clickHandle(event.key);

})
