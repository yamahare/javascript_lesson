export class TypingGame{

  constructor(){
    this.score = 0;
    this.miss = 0;
    this.timeLimit = 10 * 1000;
    this.startTime;
    this.isPlaying = false;
  }

  showResult(){
    const accuracy = this.score + this.miss == 0 ? 0 : this.score/(this.score + this.miss) * 100;
    return `${this.score} letters, ${this.miss} misses, ${accuracy.toFixed(2)}% accuracy!`;
  }

  setScorePlus(){
    this.score += 1;
  }

  setMissPlus(){
    this.miss += 1;
  }

  start(){
    this.score = 0;
    this.miss = 0;
    this.isPlaying = true;
    this.startTime = Date.now();
  }

  end(){
    this.isPlaying = false;
  }

  getTimeLeft(){
    const timeLeft = this.startTime + this.timeLimit - Date.now();
    return (timeLeft / 1000).toFixed(2);
  }

}
