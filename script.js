
// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var startTimerCount = 10;
var timerCount = startTimerCount;
var myInterval;
var numButtons=6;


function setPattern(numButtons,rounds=8) {
  pattern = [];
  for(let x=0;x<rounds;x++){
   pattern.push( (Math.floor(Math.random() * (numButtons-1))) +1 );
  }
  console.log(pattern);
}


function startGame(){
    //initialize game variables
    setPattern(numButtons);
    clueHoldTime = 1000;
    progress = 0;
    gamePlaying = true;
    timerCount = startTimerCount;
    myInterval = setInterval(timerDecrease, 1000);
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("timerText").classList.remove("hidden");  
    document.getElementById("timer").classList.remove("hidden");
    playClueSequence();
  
}


function stopGame(){
    //initialize game variables
    clearInterval(myInterval);
    progress = 0;
    timerCount=startTimerCount;
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("timerText").classList.add("hidden");  
    document.getElementById("timer").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 181.6,
  2: 319.6,
  3: 358.2,
  4: 421.2,
  5: 221.6,
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("You won! Congrats you have skills!");
}

function timerDecrease(){
  timerCount--;
  let element = document.getElementById('timer');
  element.textContent = timerCount;
  if (timerCount<0) {
      clearInterval(myInterval);
      loseGame();
      timerReset();
  }
  
}

function timerReset(){
  timerCount=startTimerCount;
  let element = document.getElementById('timer');
  element.textContent = timerCount;
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  clearInterval(myInterval);
  myInterval = setInterval(timerDecrease, 1000);
  timerReset();
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        //Increase speed
        clueHoldTime-=100;
        clueHoldTime=Math.max(clueHoldTime-100,100);
        console.log(clueHoldTime);
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    gamePlaying=false;
    loseGame();
  }

}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)