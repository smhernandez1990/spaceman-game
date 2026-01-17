
let currentWord;
let currentLevel;
let incorrectGuesses;
let guessedLetters;
let win;
let lose;
let gameboard;

const spacemanImgDisplayEl = document.querySelector('.spacemanImgDisplay img');
const letterButtonsEls = document.querySelectorAll('.letterKey');
const hintDisplayEl = document.querySelector('#hintDisplay');
const lvlOneBoard = document.querySelector('.lvlOne');
const lvlTwoBoard = document.querySelector('.lvlTwo');
const lvlThreeBoard = document.querySelector('.lvlThree');
const resetBtnEl = document.querySelector('#resetBtn');
const messageDisplayEL = document.querySelector('#messageDisplay');

function init() {
    currentLevel = 1;
    gameboard = lvlOneBoard.children;
    incorrectGuesses = 0;
    guessedLetters = [];
    spacemanImgDisplayEl.src = 'https://i.imgur.com/SwKfSSw.png';
    messageDisplayEL.textContent = '';
    win = false;
    lose = false;
    loadLevel();
};

init();

function loadLevel() {
    if (currentLevel === 1) {
        hintDisplayEl.textContent = 'HINT: Most residents of Olso, Norway would probably agree that this genre of music is Norway\'s biggest cultural export.';
        lvlTwoBoard.style.display = 'none';
        lvlThreeBoard.style.display = 'none';
        lvlOneBoard.style.display = '';
        currentWord = 'BLACKMETAL';
    } else if (currentLevel === 2) {
        hintDisplayEl.textContent = 'HINT: Artists C.C.C.C., Incapacitants, Masonna and Hanatarash are among the notable pioneers of this regional style of experimental music.';
        lvlOneBoard.style.display = 'none';
        lvlTwoBoard.style.display = '';
        lvlThreeBoard.style.display = 'none';
        currentWord = 'JAPANOISE';
        gameboard = lvlTwoBoard.children;
        guessedLetters = [];
        spacemanImgDisplayEl.src ='https://i.imgur.com/SwKfSSw.png';
    } else if (currentLevel === 3) {
        hintDisplayEl.textContent = 'HINT: A subgenre of industrial music coined in the early 1980s in England often characterized by abrasive synthesizers, aggressive vocals and provocative themes.';
        lvlOneBoard.style.display = 'none';
        lvlTwoBoard.style.display = 'none';
        lvlThreeBoard.style.display = '';
        currentWord = 'POWERELECTRONICS';
        gameboard = lvlThreeBoard.children;
        guessedLetters = [];
        spacemanImgDisplayEl.src = 'https://i.imgur.com/SwKfSSw.png';
    };
};

function render() {
    lvlAdvance();
    updateBoardDisplay();
    checkWin();
    checkLose();
};

function updateBoardDisplay() {
    for (let i = 0; i < gameboard.length; i++){
        if (gameboard[i].textContent === guessedLetters[i]) {
            continue;
        } else if (gameboard[i].id.includes(guessedLetters[i])) {
            gameboard[i].textContent = guessedLetters[i]
        };
    };
};

function lvlAdvance() {
    if (currentLevel === 1 && currentWord === guessedLetters.join('')) {
        currentLevel = 2;
        incorrectGuesses = 0;
        resetBoard();
        messageDisplayEL.textContent = 'Alright Fenriz, we get it you heard A Blaze In The Northern Sky in high school but try this next one out';
        loadLevel();
    } else if (currentLevel === 2 && currentWord === guessedLetters.join('')) {
        currentLevel = 3;
        incorrectGuesses = 0;
        messageDisplayEL.textContent = 'Okay okay, your local record store had a freak music section. But what about something a little more depraved?';
        resetBoard();
        loadLevel();
    };
};

function checkWin() {
    if (currentLevel === 3 && currentWord === guessedLetters.join('')) {
        win = true;
        return messageDisplayEL.textContent = 'You Win! You are a true purveyor of the subversive and depraved. Congrats?';
    };
};

function checkLose() {
    if (incorrectGuesses === 1) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/A27buek.png';
        spacemanImgDisplayEl.setAttribute('alt', 'spaceman head revealed/one wrong guess');
    } else if (incorrectGuesses === 2) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/uoZC9gL.png';
        spacemanImgDisplayEl.setAttribute('alt', 'spaceman upper body reveled/two wrong guesses');
    } else if (incorrectGuesses === 3) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/fMXcJfX.png';
        spacemanImgDisplayEl.setAttribute('alt', 'spaceman full torso revealed/three wrong guesses');
    } else if (incorrectGuesses === 4) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/QDmhY1D.png';
        spacemanImgDisplayEl.setAttribute('alt', 'spaceman thighs revealed/four wrong guesses');
    } else if (incorrectGuesses === 5) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/2EewjBC.jpg';
        spacemanImgDisplayEl.setAttribute('alt', 'full spaceman revealed/GAME OVER');
        console.log(spacemanImgDisplayEl);
        
        lose = true;
        return messageDisplayEL.textContent = 'You Lose! Click Reset Game to try again or maybe lurk some special interest forums from the 2000\'s first';
    };
};

function handleClick(event) {
    const letterClicked = event.target.textContent;
    const wordArr = Array.from(currentWord);
    console.log(letterClicked);
    console.log(wordArr);
    for (let i = 0; i < wordArr.length; i++){
        if (wordArr[i] == guessedLetters[i]) {
            continue;
        } else if (wordArr[i] === letterClicked) {
            guessedLetters.push(letterClicked);
            console.log(guessedLetters);
        } else {
            incorrectGuesses++;
            console.log(incorrectGuesses);
        };
    for (i = 0; i < gameboard.length; i++) {
        if (gameboard[i].textContent === letterClicked) {
            gameboard[i].style.display = '';
        };
    };
    render();
        if (win === true || lose === true) {
            letterButtonsEls.forEach(letterButtonEl => {
                letterButtonEl.removeEventListener('click', handleClick);
            });
        };
    };
};

function resetGame() {
    currentLevel = 1
    incorrectGuesses = 0
    guessedLetters = []
    letterButtonsEls.forEach(letterButtonEl => {
        letterButtonEl.addEventListener('click', handleClick);
    });
    resetBoard();
    init();
    console.log('game reset');
    
}

function resetBoard() {
    for (i = 0; i < gameboard.length; i++) {
        if (currentLevel === 1 || currentLevel === 2 || currentLevel === 3)
            gameboard[i].textContent = '';
    };
};

letterButtonsEls.forEach(letterButtonEl => {
    letterButtonEl.addEventListener('click', handleClick);
});

//letterButtonsEls.addEventListener('click', handleClick);

resetBtnEl.addEventListener('click', resetGame);

console.log(gameboard);

// set current level to 1, load first word and hint, reset spaceman image and guessed letters array

// 4. Define win/lose conditions.

//IF all letters in the word are guessed correctly AND current level is less than 3
// THEN display win alert and move to next level
//ELSE IF all letters in the word are guessed correctly AND current level is 3
// THEN display final win alert
//ELSE display lose alert

// 5. Define input handling.

//Add event listeners to letter buttons
// IF letter guessed correctly
// THEN update gameboard display to display letter in correct positions
// ELSE
// increment incorrect guess count
// update spaceman image display

// 6. How will the spaceman image be updated with each incorrect guess?

// change image source to next image in sequence based on incorrect guess count

// 7. How will the game update from one level to the next?

//a different div class for each level

// 8. How will the game react to a win or loss?

// alert windows for win/loss messages

// 9. How will the game reset?

// reset button to restart the game using init function