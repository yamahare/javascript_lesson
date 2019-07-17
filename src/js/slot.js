'use strict';

document.addEventListener('DOMContentLoaded', e=>{
  class Panel{
    constructor(){
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', e =>{
        if(this.stop.classList.contains('inactive')){ return; }

        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId);
        panelsLeft--;
        if(panelsLeft == 0){
          spin.classList.remove('inactive');
          panelsLeft = panels.length;
          checkResult();
        }
      })

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('.slotArea');
      main.appendChild(section);
    }

    getRandomImage(){
      const images = ['image/seven.png',
                      'image/bell.png',
                      'image/cherry.png']
      return images[Math.floor(Math.random() * images.length)]
    }

    spin(){
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(()=>{
        this.spin();
      }, 50)
    }

    isUnmatched(p1, p2){
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    unmach(){
      this.img.classList.add('unmatched');
    }

    activate(){
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
    }
  }

  function checkResult(){
    if(panels[0].isUnmatched(panels[1], panels[2])){
      panels[0].unmach();
    }
    if(panels[1].isUnmatched(panels[0], panels[2])){
      panels[1].unmach();
    }
    if(panels[2].isUnmatched(panels[0], panels[1])){
      panels[2].unmach();
    }
  }

  const panels = [new Panel(), new Panel(), new Panel()];

  let panelsLeft = panels.length;

  const spin = document.getElementById('spin');
  spin.addEventListener('click', e =>{
    if(spin.classList.contains('inactive')){ return; }

    spin.classList.add('inactive');
    panels.forEach(panel => {
      panel.activate();
      panel.spin();
    });
  })
})
