document.addEventListener('DOMContentLoaded', e=>{
  const timer = document.getElementById('timer');
  const letTime = document.getElementById('leftTime');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  const btn = document.getElementsByClassName('timerBtn');
  let minLimit;
  let secLimit;
  let timeLimit;
  const WARNING_SEC = 30 * 1000;

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  setButtonStateInitial();

  function countUp(){
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = d.getMilliseconds();
    timer.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
    timeoutId = setTimeout(() => {
      countUp();
    }, 10)

    if(timeLimit > 0){
      if(timeLimit - d.getTime() <= 0){
        timer.style.color = 'red';
        letTime.textContent = '';
      }
      else if(timeLimit - d.getTime() <= WARNING_SEC){
        letTime.textContent = `残り時間:${Math.ceil((timeLimit - d.getTime()) / 1000)}s`;
      }
    }
  }

  function setButtonStateInitial(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
    timer.style.color = 'black';
    letTime.textContent = '';
  }
  function setButtonStateRunning(){
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }
  function setButtonStateStopped(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  start.addEventListener('click', e =>{
    if(start.classList.contains('inactive') === true){
      return;
    }
    setButtonStateRunning()
    minLimit = document.querySelector('[name="min"]').value;
    secLimit = document.querySelector('[name="sec"]').value;
    timeLimit = (minLimit * 1000 * 60) + (secLimit * 1000)
    startTime = Date.now();
    countUp()
  })
  stop.addEventListener('click', e =>{
    if(stop.classList.contains('inactive') === true){
      return;
    }
    setButtonStateStopped()
    clearTimeout(timeoutId);
    elapsedTime += (Date.now() - startTime);
  })
  reset.addEventListener('click', e =>{
    if(reset.classList.contains('inactive') === true){
      return;
    }
    setButtonStateInitial()
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  })
  for(let i=0; i < btn.length; i++){
    btn[i].addEventListener('mousedown', () => btn[i].classList.add('pressed') )
    btn[i].addEventListener('mouseup',   () => btn[i].classList.remove('pressed') )
    btn[i].addEventListener('touchstart',() => btn[i].classList.add('pressed') )
    btn[i].addEventListener('touchend',  () => btn[i].classList.remove('pressed') )
  }
})
