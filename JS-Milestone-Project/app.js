const letterContainer = document.querySelector('.letter-container');
const optionsContainer = document.querySelector('.options-container');
const userGuess = document.querySelector('.user-input-section');
const newGameContainer = document.querySelector('.new-game-container');
const newGameButton = document.querySelector('.new-game-button');
const canvas = document.querySelector('.canvas');
const resultText = document.querySelector('.result-text');

let options = {
    fruits: ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pear', 'peach', 'plum', 'strawberry'],
    animals: ['cat', 'dog', 'elephant', 'giraffe', 'hippopotamus', 'lion', 'monkey', 'panda', 'tiger', 'zebra'],
    countries: ['australia', 'brazil', 'canada', 'china', 'france', 'germany', 'india', 'japan', 'russia', 'spain']};   

let winCount = 0;
let count = 0;

let chosenWord = '';

const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Choose a category:</h3>`;
    let buttonCon = document.createElement('div');
    for (let value in options) {
        buttonCon.innerHTML += `<button class="option-button" onclick="chooseCategory('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

const block = () => {
    let optionsButtons = document.querySelectorAll('.options');
    let letterButtons = document.querySelectorAll('.letters');

    optionsButtons.forEach(button => {
        button.disabled = true;
    });

    letterButtons.forEach(button => {
        button.disabled = true;
    });
    newGameContainer.classList.remove("hide");
};

const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll('.options');
    //if optionsValue matches the button innerText then highlight the button
    optionsButtons.forEach(button => {
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });

    //initially hide letters, clear previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = '';

    let optionArray = options[optionValue];
    //choose random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();

    //replace every letter with a dash
    let displayItem = chosenWord.replace(/./g, '<span class="letter">_</span>');

    //display each element as span
    userInputSection.innerHTML = displayItem;
};

//initial function
const initializer = () => {
    winCount = 0;
    count = 0;

    //initially erase all content and hide new game button
    userInputSection.innerHTML = '';
    optionsContainer.innerHTML = '';
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = '';

    //for creating letter buittons
    for (let i = 65; i <= 91; i++) {
        let button = document.createElement('button');
        button.classList.add("letters");
        
        button.innerText = String.fromCharCode(i);
            //character button click
        button.addEventListener('click', () => {
            let charArray = chosenWord.split('');
            let dashes = document.getElementsByClassName("dashes");
            //if array contians clicked value replace the dash with the value
            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    //if character is array is same as clicked button
                    if (char === button.innerText) {
                        dashes[index].innerText = char;
                        winCount++;
                    if (winCount === charArray.length) {
                        resultText.innerText = "You won!";
                        blocker();
                    }
                }
            });
        } else {
            count++;

            drawMan(count);
            if (count === 6) {
                resultText.innerText = "You lost!";
                blocker();
            }
        }
        button.disabled = true;
        });
        letterContainer.append(button);
    }
    displayOptions();
    let { initialDrawing} =canvasCreator();

    initialDrawing();
};

//canvas drawing
const canvasCreator = () => {
    let context = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    };

    //drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
    }

    const head = () => {
        ctx.beginPath();
        ctx.arc(70, 30, 10, 0, Math.PI * 2);
        ctx.stroke();
    };

    const torso = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 70);
    };

    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };

   const initialDrawing = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawLine(10, 130, 130, 130);
    drawLine(10, 10, 10, 131);
    drawLine(10, 10, 70, 10);
    drawLine(70, 10, 70, 20);
    };

    return { initialDrawing, head, torso, leftArm, rightArm, leftLeg, rightLeg };

//draw the man
const drawMan = (count) => {
    let { head, torso, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            torso();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
}

//new game button
newGameButton.addEventListener('click', () => {
    initializer();
});
