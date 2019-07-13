export class TypingWords{

  constructor(){
    this.words = [
      'apple',
      'sky',
      'blue',
      'test',
      'pokemon',
      'teepod',
      'javascript',
    ];
    this.word = this.getRandomWord();
    this.loc = 0;
  }

  getRandomWord(){
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  getCurrentWord() {
    let placeholder = '';
    for(let i=0; i < this.loc; i++){
      placeholder += '_';
    }
    return placeholder + this.word.substring(this.loc);
  }

  moveNextLocation(){
    this.loc++;
  }

  setNewRandomWord(){
    if(this.loc == this.word.length){
      this.word = this.getRandomWord();
      this.loc = 0;
    }
  }
}
