'use strict';

document.addEventListener('DOMContentLoaded', e=>{
  const imgPaths = [
    'image/pic00.png',
    'image/pic01.png',
    'image/pic02.png',
    'image/pic03.png',
    'image/pic04.png',
    'image/pic05.png',
    'image/pic06.png',
    'image/pic07.png',
  ]
  let currentNum = 0;

  const next = document.getElementById('next');
  next.addEventListener('click', e=>{
    removeCurrentClass();
    currentNum++;
    if(currentNum === imgPaths.length){
      currentNum = 0;
    }
    setMainImg(imgPaths[currentNum]);
    addCurrentClass();
  })

  const prev = document.getElementById('prev');
  prev.addEventListener('click', e=>{
    removeCurrentClass();
    currentNum--;
    if(currentNum === -1){
      currentNum = imgPaths.length - 1;
    }
    setMainImg(imgPaths[currentNum]);
    addCurrentClass();
  })

  let timeOutId;
  function playSlideShow(){
    timeOutId = setTimeout(()=>{
      next.click();
      playSlideShow();
    }, 1000)
  }

  const play = document.getElementById('play');
  const pause = document.getElementById('pause');
  play.addEventListener('click', e=>{
    play.classList.add('hidden');
    pause.classList.remove('hidden');
    playSlideShow();
  })
  pause.addEventListener('click', e=>{
    pause.classList.add('hidden');
    play.classList.remove('hidden');
    clearTimeout(timeOutId);
  })



  setMainImg(imgPaths[currentNum]);

  function setMainImg(imgPath){
    document.querySelector('main img').src = imgPath;
  }

  function removeCurrentClass(){
    document.querySelectorAll('.thumbnails li')[currentNum]
            .classList.remove('current');
  }

  function addCurrentClass(){
    document.querySelectorAll('.thumbnails li')[currentNum]
            .classList.add('current');
  }

  const thumbnails = document.querySelector('.thumbnails');
  imgPaths.forEach((imgPath, index) => {
    let li = document.createElement('li');
    if(currentNum === index){ li.classList.add('current'); }
    li.addEventListener('click', e => {
      setMainImg(imgPath);
      removeCurrentClass();
      currentNum = index;
      addCurrentClass();
    })
    let img = document.createElement('img');
    img.src = imgPath;
    li.appendChild(img);
    thumbnails.appendChild(li);
  })
})
