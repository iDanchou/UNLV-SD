const buttonOptions = document.getElementById("buttons");
const questionContainer = document.getElementById("question-container");
const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const buttonC = document.getElementById('buttonC');
const buttonD = document.getElementById('buttonD');

let gryf = 0
let huff = 0
let raven = 0
let slyth = 0

let house = []




clickA = buttonA.addEventListener('click', function() {
  raven += 1
});

clickB = buttonB.addEventListener('click', function() {
  gryf += 1
});

clickC = buttonC.addEventListener('click', function() {
  slyth += 1
});

clickD = buttonD.addEventListener('click', function() {
  huff += 1
});


var questionOne = document.createElement('p');
let content = document.querySelector(".question")

questionOne.innerHTML = `What do you consider to be the most important quality?
A: Wisdom 
B: Honesty
C: Power
D: Friendship
`



var questionTwo = document.createElement('p');
questionTwo.innerHTML = `What kind of instrument most pleases your ear?
A: Piano
B: Trumpet
C: Violin
D: Drums
`

var questionThree = document.createElement('p');
questionThree.innerHTML = `Which would you rather be?
A: Envied
B: Trusted
C: Feared
D: Praised
`

var questionFour = document.createElement('p');
questionFour.innerHTML = `Which road tempts you most?
A: The cobbled street lined with ancient buildings
B: The twisting, leaf-strewn path through the woods
C: The narrow, dark, lantern-lit alley
D: The wide, sunny, grassy lane
`

var questionFive = document.createElement('p');
questionFive.innerHTML = `Which nightmare would frighten you most?
A: An eye at the keyhole of the dark, windowless room in which you are locked.
B: Waking up to find that neither your friends nor your family have any idea who you are.
C: Being forced to speak in such a silly voice that hardly anyone can understand you, and everyone laughs at you.
D: Standing atop something very high and realizing suddenly that there is nothing to stop you falling.
`

var questionSix = document.createElement('p');
questionSix.innerHTML = `Late at night, walking alone down the street, you hear a peculiar cry that you believe to have a magical source. Do you:
A: Withdraw into the shadows to await developments, while mentally reviewing the most appropriate defensive and offensive spells, should trouble occur.
B: Draw your wand and try to discover the source of the noise.
C: Draw your wand and stand your ground.
D: Proceed with caution, keeping one hand on your concealed wand and an eye out for any disturbance.
`

content.appendChild(questionOne);

for (let i = 0; i < 6; i++) {
  
  if (clickA === true) {
    questionOne.classList.add("hide")
    content.appendChild(questionTwo);
  }
  else if (clickB === true) {
    questionOne.classList.add("hide")
    content.appendChild(questionTwo);
  }
  else if (clickC === true) {
    questionOne.classList.add("hide")
    content.appendChild(questionTwo);
  }
  else if (clickD === true) {
    questionOne.classList.add("hide")
    content.appendChild(questionTwo);
  }
}

// content.appendChild(questionOne);
// content.appendChild(questionTwo);
// content.appendChild(questionThree);
// content.appendChild(questionFour);
// content.appendChild(questionFive);
// content.appendChild(questionSix);



// questionOne.classList.add("hide")
// questionTwo.classList.add("hide")
// questionThree.classList.add("hide")
// questionFour.classList.add("hide")
// questionFive.classList.add("hide")
// questionSix.classList.add("hide")