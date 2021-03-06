# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sahil Bambulkar**

Time spent: **15 hours spent in total**

Link to project: https://glitch.com/edit/#!/nova-chemical-servant?path=script.js%3A151%3A38

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Speed has maximum so that it will not go faster after certain point
- [x] Timer was set to keep ticking during clues to add to stress (but reset during each button click)
- [x] Each button is an animated gif

## Video Walkthrough (GIF)

### This is a gif of a player winning the game. 
#### It also includes the heading, body text, five buttons, start/stop buttons and turns. 

![success10](https://user-images.githubusercontent.com/42818731/161365479-c9f32b00-ce7c-40e5-af24-b0fffe146892.gif)

### This is a gif of a player losing a game after an incorrect guess.
#### It also shows each of the buttons are animated gifs that light up when clicked, that the sequence is random each round and that it speeds up. 

![Losing10](https://user-images.githubusercontent.com/42818731/161365592-15391a28-1f96-4aa2-892e-c2f3345f56e3.gif)


### This is a gif of a player stopping and starting the game (and resetting the timer).
#### Some additional features not visible in the gifs are the sound frequency which is different from the template and that the player loses when the timer runs out. 

![StoppingGame](https://user-images.githubusercontent.com/42818731/161365513-6dba1d2e-68e2-4946-beab-68b0e9ea9a3e.gif)




## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used W3Schools website because they have great resources on [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp) and HTML/JS/CSS in general. I also used the [Mozilla Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for specifics about JavaScript. Another resource I used was a YouTube video called: [The javaScript method setInterval EXPLAINED in 5 minutes!](https://www.youtube.com/watch?v=GhePFBkdNYk&ab_channel=CodewithAniaKub%C3%B3w) to better understand setInterval() and clearInterval() JavaScript functions. Finally, I used the GeeksForGeeks website which had a great post on [Difference between addEventListener and onclick in JavaScript](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/). These last two resources helped me overcome challenges so I will discuss them more in the next question.  

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Two challenges I encountered were understanding the main game loop and another challenge was event listening versus onclick in JavaScript. These are both unique aspects of web development that I had not previously seen programming in other languages like Python, C, C++ and Java and so they were new challenges for me. 

First, for the gameplay loop challenge, I was confused how setInterval() and clearInterval() work without an actual loop present. In the past when I made games, I would implement a while loop with a certain amount of delay and use an iterating time variable to keep track of time. I was not used to it being done by itself in the background. I was able to quickly learn the two functions' functionality by watching a [YouTube channel, Code with Ania Kub??w](https://www.youtube.com/watch?v=GhePFBkdNYk&ab_channel=CodewithAniaKub%C3%B3w), which had a great concise video on the topic.

Another aspect that was challenging was event listening. Before this tutorial, I did not completely understand how event listening worked and falsely thought the onclick event attribute we adjusted for each button was the same as event listening. In the tutorial, we added an on click event attribute to each button to run a function whenever the button was clicked. To learn the difference between changing the onclick event attribute and addEventListener I referred to a webpage [Difference between addEventListener and onclick in JavaScript](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/). This helped me learn that addEventListener can add multiple events to an element and can only be added through JavaScript, so in the <script> section or an external .js file. Meanwhile, onclick is a property that can add only a single event or function to an element and, being a property, it can also be added as an HTML attribute as we did in the game tutorial. 
  
These are two challenges I ran into while creating the submission and how I dealt with and overcame them. I used external resources to learn some background information, and reapproach the topic with my new knowledge. When there is a deliverable with a pending deadline, it is important to keep in mind time limitations and learn the minimum you need to in order to implement a feature and complete the project. After it is successfully implemented and submitted, there is more time to learn the concept more in-depth. Thus, after submitting this project, I plan on going back and flushing out these concepts so I can learn them more thoroughly for the future. 
 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

One question I had about web development would be best practices. For example, would it be better to create modular functions that edit element properties through JavaScript or is it better to lower overhead by writing them directly in HTML? Or another example would be should we limit the scope of all our variables or is it more useful to keep some of them global? These are more nuanced aspects of programming that you cannot learn simply writing programs, since both will run successfully. Only in a real development environment, or through the advice of someone experienced, can you learn what are best practices for an industry, so I am eager to learn that in web development. 

Another question I had about web development was how to program a live application or game with feedback between two or more players. This would work considerably differently than a browser game that could be run entirely in JavaScript in a browser. In the age of social media and massively multiplayer online games, it has become clear how social interaction can add a new dimension to even the simplest game or feature. For example, one of Facebook.com???s most popular feature for years was the ability to ???poke??? someone which was nothing more than a notification. Additionally, the main attraction of using the browser is the ability to instantly connect to the internet, so it seems natural to leverage that ability when developing browser programs. So, with the understanding that it will add a lot more complexity, I would love to learn how to add that social aspect to my projects. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  
If I had a few more hours to work on this project, I would limit the scope of variables, combine similar functions and make the game code more modular to add more features. 

For the variables, almost all of them are defined as global. This is unnecessary as many of them are only used in a limited capacity such as the delays for clueHoldTime and cluePauseTime or the progress variable which holds the number of rounds. Reducing these and other variables' scope to local scope or having them as parameters would lead to cleaner more efficient code.  

Another change I would make would be to combine functions that have simple, repetitive actions. For example small functions like winGame() and loseGame() could be eliminated. They both send an alert message saying if the player won or lost and then run the stopGame() function. They both could be eliminated and their functionality combined in the stopGame() function. This could be done within stopGame() through a parameter and if-then statement that tells the program to run a failure alert message, success alert message or neither and go on to stop the game. 

Finally, I would take steps to make the game more modular and remove some hardcoded values and variables. For example, in the tutorial the number of buttons was hardcoded to be set as four, and there were four preset colors and four present sounds. Yet, if these values were treated as variables whose values were generated in JavaScript when the program runs, there is the potential for unlimited different color, sound and button combinations. This could be implemented through a simple function to produce random colors, sounds and number of buttons to be added as elements. 

These are some of the changes I would implement given more time to work on the project. 

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=Q5pwke2NRhY)

## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
