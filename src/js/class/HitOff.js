export class HitOff {

  constructor(){
    this.num = 10;
    this.winner = Math.floor(Math.random() * this.num); // 0~4
  }

  createBoxDom(){
    let boxDom = document.createElement('div');
    boxDom.classList.add('box');
    return boxDom
  }

  generate(){
    let frag = document.createDocumentFragment();

    for(let i=0; i <= this.num; i++){
      let boxDom = this.createBoxDom();
      boxDom.dataset.result = (i == this.winner) ? 'win' : 'lose';

      boxDom.addEventListener('click', (e) => {
        if(boxDom.dataset.result === 'win'){
          boxDom.textContent = 'win!';
          e.target.classList.add('win');
        }else{
          boxDom.textContent = 'lose';
          e.target.classList.add('lose');
        }
      })
      frag.appendChild(boxDom);
    }
    document.getElementById('main').appendChild(frag);
  }

}
