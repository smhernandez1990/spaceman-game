/*
I'm planning to do a 3 level game of spaceman with a theme of different styles of weird music genres from around the world. Each level will begin with a hint about the genre and an empty display indicating the number of letters in the name of the genre. The player will guess letters until they either guess the genre correctly or run out of attempts. With each incorrect guess a part of an image of a spaceman will be revealed. When the entire spaceman is revealed the game is over and an alert window will appear with a message indicating the player has lost. If the player guesses the genre correctly an alert window will pop up congratulating them and they will move on to the next level and the spaceman image will reset. When all three levels are completed successfully a final alert window will appear congratulating the player on completing the game. 

Level 1:
Genre: Black Metal
Hint: Most residents of Olso, Norway would probably agree that this genre of music is Norway's biggest cultural export.

Level 2:
Genre: Japanoise
Hint: Artists C.C.C.C., Incapacitants, Masonna and Hanatarash are among the notable pioneers of this regional style of experimental music.

Level 3:
Genre: Power Electronics
Hint: A subgenre of industrial music coined in the early 1980s in England often characterized by abrasive synthesizers, aggressive vocals and provocative themes.
*/

// 1. Define main variables needed for the game.

let currentWord;
let currentLevel;
let gameboard;
let incorrectGuesses;
let guessedLetters = [];

// current word, current level, gameboard, number of incorrect guesses, guessed letters array

// 2. Define cached elements.

const spacemanImgDisplayEl = document.querySelector('.spacemanImgDisplay');
const letterButtonsEls = document.querySelector('.letterButtons');
const hintDisplayEl = document.querySelector('#hintDisplay');
const gameboardDisplayEl = document.querySelector('.gameboardDisplay');

// spaceman image display, letter buttons, hint display, level gameboard

// 3. Create an initialization function.

function init() {
    currentLevel = 5;
    loadLevel();
    incorrectGuesses = 0;
    guessedLetters = [];
    updateSpacemanImage();
    render();
}

init();

function loadLevel() {
    if (currentLevel === 1) {
        hintDisplayEl.textContent = 'HINT: Most residents of Olso, Norway would probably agree that this genre of music is Norway\'s biggest cultural export.';
    } else if (currentLevel === 2) {
        hintDisplayEl.textContent = 'HINT: Artists C.C.C.C., Incapacitants, Masonna and Hanatarash are among the notable pioneers of this regional style of experimental music.';
    } else if (currentLevel === 3) {
        hintDisplayEl.textContent = 'HINT: A subgenre of industrial music coined in the early 1980s in England often characterized by abrasive synthesizers, aggressive vocals and provocative themes.';
    }
};

function updateSpacemanImage(incorrectGuesses) {
    if (incorrectGuesses === 5) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/2EewjBC.jpg';
    }else if (incorrectGuesses === 4) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/QDmhY1D.png';
    }else if (incorrectGuesses === 3) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/fMXcJfX.png';
    }else if (incorrectGuesses === 2) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/uoZC9gL.png';
    }else if (incorrectGuesses === 1) {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/A27buek.png';
    }else {
        spacemanImgDisplayEl.src = 'https://i.imgur.com/SwKfSSw.png';
    }
}

console.log(updateSpacemanImage);


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