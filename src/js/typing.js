'use strinct';

{
  const words = [
    'apple',
    'sky',
    'blue',
    'test',
    'pokemon',
    'teepod',
    'javascript',
  ]
  let word;
  let loc;
  let score;
  let miss;
  const timeLimit = 10 * 1000;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');

  function updateTarget() {
    let placeholder = '';
    for(let i=0; i < loc; i++){
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
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

    loc = 0;
    score = 0;
    miss = 0;

    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];

    isPlaying = true;
    updateTarget();
    startTime = Date.now();
    updateTimer();
  })

  window.addEventListener('keyup', e=>{
    if(isPlaying !== true){ return; }

    if(e.key === word[loc]){
      loc++;
      score++;
      scoreLabel.textContent = score;
      if(loc == word.length){
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      updateTarget()
    }else{
      miss++;
      missLabel.textContent = miss;
    }
  })
}
