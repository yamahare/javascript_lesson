'use strinct';

import { TypingWords } from 'class/TypingWords.js'

{
  let score;
  let miss;
  const timeLimit = 10 * 1000;
  let startTime;
  let isPlaying = false;
  let tw;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');

  function updateTarget() {
    target.textContent = tw.getCurrentWord();
  }

  function showResult(){
    const accuracy = score + miss == 0 ? 0 : score/(score+miss) * 100;
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`)
  }

  function updateTimer(){
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);

    const timeoutId = setTimeout(()=>{
      updateTimer();
    },10);

    if(timeLeft < 0){
      isPlaying = false;
      clearTimeout(timeoutId);
      setTimeout(()=>{ showResult(); },100)

      timerLabel.textContent = '0.00';
      target.textContent = 'click to Replay?';
    }
  }

  window.addEventListener('click', e=>{
    if(isPlaying === true){ return; }

    tw = new TypingWords();
    score = 0;
    miss = 0;

    scoreLabel.textContent = score;
    missLabel.textContent = miss;

    isPlaying = true;
    updateTarget();
    startTime = Date.now();
    updateTimer();
  })

  window.addEventListener('keyup', e=>{
    if(isPlaying !== true){ return; }

    if(e.key === tw.loc){
      tw.moveNextLocation();
      score++;
      scoreLabel.textContent = score;
      this.setNewRandomWord()
      updateTarget()
    }else{
      miss++;
      missLabel.textContent = miss;
    }
  })
}
