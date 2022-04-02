# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

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
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Speed has minimum level so it does not go too fast

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used W3Schools website because they have great resources on [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp) and HTML/JS/CSS in general. I also used the [Mozilla Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for specifics about JavaScript. Another resource I used was a YouTube video called: [The javaScript method setInterval EXPLAINED in 5 minutes!](https://www.youtube.com/watch?v=GhePFBkdNYk&ab_channel=CodewithAniaKub%C3%B3w) to better understand setInterval() and clearInterval() functions. Finally, I used the GeeksForGeeks website which had a great post on [Difference between addEventListener and onclick in JavaScript](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/). These last two resources helped me overcome challenges so I will discuss them more in the next question.  

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Two challenges I encountered were understanding the main gameloop and another challenge was event listening versus onclick in JavaScript. These are both unique aspects of web development that I had not previously seen programming in other languages like Python, C, C++ and Java and so they were new challenges for me. 

First, for the gameplay loop challenge, I was confused how setInterval() and clearInterval() work without an actual loop present. In the past when I made games, I would implement a while loop with a certain amount of delay and use an iterating time variable to keep track of time. I was not used to the fact that it did it by itself. I was able to quickly learn the two functions' functionality by watching a YouTube channel, Code with Ania Kubów, which had a great concise video on the topic. I thought this was appropriate as my goal was to implement and complete my project on time. 

Another aspect that was challenging was event listening. Before this tutorial, I did not completely understand how event listening worked and falsely thought the onclick event attribute we adjusted for each button was the same as event listening. In the tutorial, we added an on click event attribute to each button to run a function whenever the button was clicked. To learn the difference between changing the onclick event attribuet and addEventListener I referred to a webpage [Difference between addEventListener and onclick in JavaScript](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/#:~:text=The%20addEventListener()%20and%20onclick,when%20a%20button%20is%20clicked.). This helped me learn that addEventListener can add multiple events to an element and can only be added through JavaScript, so in the <script> section or an external .js file. Meanwhile, onclick is a property that can add only a single event or function to an element and, being a property, it can also be added as an HTML attribute as we did in the game tutorial. 
  
These are two challenges I ran into while creating the submission and how I dealt with and overcame them. I used external resources to learn some background information, and reapproach the topic with my new knowledge. When there is a deliverable with a pending deadline, it is important to keep in mind time limitations and learn the minimum you need to in order to implement a feature and complete the project. After it is successfully implemented and submitted, there is more time to learn the concept more in-depth. Thus, for this project, I plan on going back and flushing out these concepts so I can learn them more in depth for the future. 
 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


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
