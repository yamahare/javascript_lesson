'use strinct';

import { TypingWords } from './class/TypingWords.js'
import { TypingGame } from './class/TypingGame.js'

let tw;
let game;

const target = document.getElementById('target');
const scoreLabel = document.getElementById('score');
const missLabel = document.getElementById('miss');
const timerLabel = document.getElementById('timer');

function updateTarget() {
  target.textContent = tw.getCurrentWord();
}

function updateTimer(){
  timerLabel.textContent = game.getTimeLeft();

  const timeoutId = setTimeout(()=>{
    updateTimer();
  },10);

  if(game.getTimeLeft() < 0){
    game.end();
    clearTimeout(timeoutId);
    setTimeout(()=>{ alert(game.showResult()); },100)

    timerLabel.textContent = '0.00';
    target.textContent = 'click to Replay?';
  }
}

window.addEventListener('click', e=>{
  if(game === undefined){ game = new TypingGame(); }
  if(game.isPlaying === true){ return; }

  tw = new TypingWords();
  game.start();

  scoreLabel.textContent = game.score;
  missLabel.textContent = game.miss;

  updateTarget();
  updateTimer();
})

window.addEventListener('keyup', e=>{
  if(game === undefined || game.isPlaying !== true){ return; }

  if(e.key === tw.currentChar()){
    tw.setNextLocation();
    game.setScorePlus();
    scoreLabel.textContent = game.score;
    tw.setNewRandomWord();
    updateTarget();
  }else{
    game.setMissPlus();
    missLabel.textContent = game.miss;
  }
})
