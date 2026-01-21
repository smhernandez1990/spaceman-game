# See You, Space Cowboy

![screenshot of game](https://imgur.com/rUUVwGZ.png)

See You, Space Cowboy is a game of spaceman with a theme of weirdo/freak music genres from different parts of the world. Taking the `hint` provided for each level into consideration you can use the `on-screen keyboard` provided to guess the letters of the genre in question. If you successfully guess the genre you will proceed to the next level. If you fail to guess the genre before the image of the spaceman is fully revealed you lose and can try again by hitting the `reset button` underneath the `on-screen keyboard`. I chose to make this game because I love sci-fi and thought it would be fun to combine my weird niche interests with a game revolving around a spaceman.

## Link and Planning Materials

__Link__: [You Can Play The Game Here](https://smhernandez1990.github.io/spaceman-game/)

__Planning Materials__:

I'm planning to do a 3 level game of spaceman with a theme of different styles of weird music genres from around the world. Each level will begin with a hint about the genre and an empty display indicating the number of letters in the name of the genre. The player will guess letters until they either guess the genre correctly or run out of attempts. With each incorrect guess a part of an image of a spaceman will be revealed. When the entire spaceman is revealed the game is over and an alert window will appear with a message indicating the player has lost. If the player guesses the genre correctly an alert window will pop up congratulating them and they will move on to the next level and the spaceman image will reset. When all three levels are completed successfully a final alert window will appear congratulating the player on completing the game.

...
1. Define main variables needed for the game.

+ current word, current level, gameboard, number of incorrect guesses, guessed letters array

2. Define cached elements.

+ paceman image display, letter buttons, hint display, level gameboard

3. Create an initialization function.

+ set current level to 1, load first word and hint, reset spaceman image and guessed letters array

4. Define win/lose conditions.

+ IF all letters in the word are guessed correctly AND current level is less than 3
+ THEN display win alert and move to next level
+ ELSE IF all letters in the word are guessed correctly AND current level is 3
+ THEN display final win alert
+ ELSE display lose alert

5. Define input handling.

+ Add event listeners to letter buttons
+ IF letter guessed correctly
THEN update gameboard display to display letter in correct positions
+ ELSE
increment incorrect guess count
update spaceman image display

6. How will the spaceman image be updated with each incorrect guess?

+ change image source to next image in sequence based on incorrect guess count

7. How will the game update from one level to the next?

+ a different div class for each level

8. How will the game react to a win or loss?

+ alert windows for win/loss messages

9. How will the game reset?

+ reset button to restart the game using init function

Obviously a lot changed once I got going on the actual code but this is where I started.

## Assets

All the images used in this game and `README` are located in my [imgur account]('https://imgur.com/user/smhernandez1990/posts').

Spaceman is a screenshot from The Twilight Zone.

## Tech Used

For this game I used `HTML` to create the different elements of the game, `CSS` to style the elements and some of the behaviors such as cursor changes and hover actions, `JavaScript` to make the game function and finally `Markdown` to make the `README` you are looking over right now. Wow!

## Planned Updates

Future updates I would like to make are adding media queries to make the game more compatible with mobile devices and tablets as well as maybe adding additional levels to the game and sound effects for each level advancement, winning and losing.

+ __UPDATE 17.01.2026__: Media query (re)added for smart phone compatibility.
