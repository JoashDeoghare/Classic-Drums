let randomLetters = [];
let countdown = 8;


//DETECTING BUTTON PRESS

var noOfButtons = document.querySelectorAll(".click").length;

for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".click")[i].addEventListener("click", function() {

    var whichButton = this.innerHTML;
    makeSound(whichButton);
    buttonAnimation(whichButton);

  });
}


//DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


// Function to generate a random number between 1 and 26 (corresponding to A-Z)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to convert number to corresponding alphabet (A-Z)
function numberToAlphabet(num) {
  if (num < 97 || num > 122) {
    return null; // Return null for out of range inputs
  }
  return String.fromCharCode(num);
}

// Function to generate an array of 7 unique random letters (A-Z)
function generateRandomLetters() {
  let lettersArray = new Set(); // Use a Set to prevent duplicates

  while (lettersArray.size < 7) { // Keep going until we have 7 unique letters
    let randomNum = getRandomNumber(97, 122);  // Random number between 1 and 26
    lettersArray.add(numberToAlphabet(randomNum));  // Add to Set (which prevents duplicates)
  }

  return Array.from(lettersArray); // Convert Set to Array
}

// Function to update the button texts with random letters
function updateButtonsWithRandomLetters() {
  let array = generateRandomLetters();
  randomLetters = array;
  
  // Assign each letter to a button
  for (let i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".click")[i].innerHTML = randomLetters[i];
  }

 countdown = 8;
}


// Function to update the timer display in the footer
function updateTimerDisplay() {
  document.getElementById("timer").innerHTML = countdown;
}

// Timer to count down every second
function startCountdown() {
  setInterval(function() {
    if (countdown > 0) {
      countdown--;
    }
    updateTimerDisplay();
  }, 1000);
}

// Run the update function every 10 seconds
setInterval(updateButtonsWithRandomLetters, 8000);



// Initially assign event listeners
updateButtonsWithRandomLetters();
startCountdown();

 // make sound function
 function makeSound(key) {
  // key = key.toLowerCase();
  

  // for(let i=0; i<7; i++){
  //   letter[i]
  // }

  // if(key == letter[0]){
  //   var crash = new Audio('crash.mp3');
  //     crash.play();
  // }else if(key == letter[1]){
  //   var kickbass = new Audio('kick-bass.mp3');
  //     kickbass.play();
  // }else if(key == letter[2]){
  //   var snare = new Audio('snare.mp3');
  //     snare.play();
  // }else if(key == letter[3]){
  //   var tom1 = new Audio('tom-1.mp3');
  //     tom1.play();
  // }else if(key == letter[4]){
  //   var tom2 = new Audio('tom-2.mp3');
  //     tom2.play();
  // }else if(key == letter[5]){
  //   var tom3 = new Audio('tom-3.mp3');
  //     tom3.play();
  // }else if(key == letter[6]){
  //   var tom4 = new Audio('tom-4.mp3');
  //     tom4.play();
  // }else{
  //   console.log(key);
  // }

  switch (key) {
    case randomLetters[0]:
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case randomLetters[1]:
      var kickbass = new Audio('kick-bass.mp3');
      kickbass.play();
      break;

    case randomLetters[2]:
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case randomLetters[3]:
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
      break;

    case randomLetters[4]:
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;

    case randomLetters[5]:
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case randomLetters[6]:
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log(key);

  }

}



function buttonAnimation(currentKey){
  for (let i = 0; i < noOfButtons; i++) {
    let button = document.querySelectorAll(".click")[i];
    
    if (button.innerHTML === currentKey) {
      button.classList.add("pressed");

      setTimeout(function() {
        button.classList.remove("pressed");
      }, 100);
      break;
    }
  }
  
}
