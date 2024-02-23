const letterContainer = document.getElementById("letter-container");
const gameSelection = document.getElementById("game-selection");
const userInput = document.getElementById("user-input");
const newGame = document.getElementById("new-game");
const playButton = document.getElementById("play-again");
const resultText = document.getElementById("result-text");


//character options for the game
let selection = {
    characters: [
        "Dexter",
        "Mandark",
        "Courage",
        "Eustace",
        "Muriel",
        "Johnny Bravo",
        "Samurai Jack",
        "Blossom",
        "Buttercup",
        "Bubbles",
        "Mojo Jojo",
        "Cyborg",
        "Beast Boy",
        "Robin",
        "Starfire",
        "Raven",
        "Billy",
        "Mandy",
        "Grim",

    ]
}

//count
let winCount = 0;
let count = 0;

const displayButton = () => {
    gameSelection.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in selection) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    gameSelection.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    //disable all options
    optionsButtons.forEach((button) => {
      button.disabled = true;
    });
  
    //disable all letters
    letterButtons.forEach((button) => {
      button.disabled.true;
    });
    newGameContainer.classList.remove("hide");
  };
  
  //Word Generator
  const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //If optionValur matches the button innerText then highlight the button
    optionsButtons.forEach((button) => {
      if (button.innerText.toLowerCase() === optionValue) {
        button.classList.add("active");
      }
      button.disabled = true;
    });
  
    //initially hide letters, clear previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";
  
    let optionArray = characters[optionValue];
    //choose random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
  
    //replace every letter with span containing dash
    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
  
    //Display each element as span
    userInputSection.innerHTML = displayItem;
  };
  
  //Initial Function (Called when page loads/user presses new game)
  const initializer = () => {
    winCount = 0;
    count = 0;
  
    //For creating letter buttons
    for (let i = 65; i < 91; i++) {
      let button = document.createElement("button");
      button.classList.add("letters");
      //Number to ASCII[A-Z]
      button.innerText = String.fromCharCode(i);
      //character button click
      button.addEventListener("click", () => {
        let charArray = chosenWord.split("");
        let dashes = document.getElementsByClassName("dashes");
        //if array contains clciked value replace the matched dash with letter else dram on canvas
        if (charArray.includes(button.innerText)) {
          charArray.forEach((char, index) => {
            //if character in array is same as clicked button
            if (char === button.innerText) {
              //replace dash with letter
              dashes[index].innerText = char;
              //increment counter
              winCount += 1;
              //if winCount equals word lenfth
              if (winCount == charArray.length) {
                resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
                //block all buttons
                blocker();
              }
            }
          });
        } else {
          //lose count
          count += 1;
          //for drawing man
          drawMan(count);
          //Count==6 because head,body,left arm, right arm,left leg,right leg
          if (count == 6) {
            resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
            blocker();
          }
        }
        //disable clicked button
        button.disabled = true;
      });
      letterContainer.append(button);
    }
  
    displayOptions();
  

  
  //New Game
  newGameButton.addEventListener("click", initializer);
  window.onload = initializer;}