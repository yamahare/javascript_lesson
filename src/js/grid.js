'user strict';

// import { HitOff } from './class/HitOff.js';

// const hitoff = new HitOff();
// hitoff.generate();


document.addEventListener('DOMContentLoaded', e=>{
  const grid = document.getElementById('gridContainerCustom');
  let num = document.querySelector('[name="num"]').value;
  let updateSpan = document.querySelector('[name="updateSpan"]').value;
  let blockSize = document.querySelector('[name="blockSize"]').value;
  const generateBtn = document.getElementById('generateBtn');
  const stopBtn = document.getElementById('stopBtn');
  const selectedColor = document.getElementsByClassName('selectedColorBlock')[0];
  const selectedColorText = document.getElementsByClassName('selectedColorText')[0];
  let generateLoopId;

  generateBlocks();

  stopBtn.addEventListener('click', e => {
    clearTimeout(generateLoopId);
  })

  generateBtn.addEventListener('click', e => {
    clearTimeout(generateLoopId);
    num = document.querySelector('[name="num"]').value;
    updateSpan = document.querySelector('[name="updateSpan"]').value;
    blockSize = document.querySelector('[name="blockSize"]').value;
    generateLoop();
  });

  function hue(){
    return Math.floor(Math.random()*360);
  }
  function saturation(){
    return Math.floor(Math.random()*100);
  }
  function lightness(){
    return Math.floor(Math.random()*100);
  }
  function generateBlocks(){
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(${blockSize}px, 1fr))`;
    grid.style.gridAutoRows = `${blockSize}px`;

    let frag = document.createDocumentFragment();
    for(let i=0; i<num; i++){
      let blockDom = document.createElement('div');
      blockDom.classList.add('block');
      blockDom.style.width  = `${blockSize}px`;
      blockDom.style.height = `${blockSize}px`;

      blockDom.style.backgroundColor = `hsl(${hue()}, ${saturation()}%, ${lightness()}%)`;
      blockDom.addEventListener('click', e=>{
        selectedColor.style.backgroundColor = e.target.style.backgroundColor;
        selectedColorText.textContent = e.target.style.backgroundColor;
      })
      frag.appendChild(blockDom);
    }
    grid.appendChild(frag);
  }

  generateLoop()
  function generateLoop(){
    generateBlocks();
    generateLoopId = setTimeout(()=>{
      generateLoop();
    }, updateSpan);
  }
})
