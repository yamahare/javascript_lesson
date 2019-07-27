'user strict';

{
  document.addEventListener('DOMContentLoaded', e=>{

    function rand(min, max){
      return min + Math.floor(Math.random() * (max-min+1));
    }

    class Ball{
      constructor(x, y, r, Stage){
        this.x = x;
        this.y = y;
        this.r = r;
        this.Stage = Stage
        this.canvasWidth = Stage.CANVAS_WIDTH;
        this.canvasHeight = Stage.CANVAS_HEIGHT;
        this.vx = rand(-10, 10); // 加速度
        this.vy = rand(-10, 10); // 加速度
        this.color = `hsla(${rand(50,100)}, ${rand(40,80)}%, ${rand(40,80)}%, ${Math.random()})`;
      }

      draw(){
        this.Stage.ctx.beginPath();
        this.Stage.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.Stage.ctx.fillStyle = this.color;
        this.Stage.ctx.closePath();
        this.Stage.ctx.fill();
      }

      move(){
        if(this.x + this.r > this.canvasWidth || this.x - this.r < 0){
          this.vx *= -1;
        }
        if(this.y + this.r > this.canvasHeight || this.y - this.r < 0){
          this.vy *= -1;
        }
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    class Stage{


      constructor(canvas){
        this.CANVAS_WIDTH = document.querySelector('.ballBoundContainer').offsetWidth;
        this.CANVAS_HEIGHT = document.querySelector('.ballBoundContainer').offsetHeight;
        this.balls = [];
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.configDpr();

        this.canvas.addEventListener('click', e=>{
          let x, y, r;
          let rect = e.target.getBoundingClientRect();
          x = e.clientX - rect.left;
          y = e.clientY - rect.top;
          r = rand(0, 100) < 20 ? rand(50, 80) : rand(10, 35);

          x = this.adjustPosition(x, r, canvas.width);
          y = this.adjustPosition(y, r, canvas.height);
          this.balls.push(new Ball(x, y, r, this));
        })
      }

      // 解像度設定
      configDpr(){
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = this.CANVAS_WIDTH * dpr;
        this.canvas.height = this.CANVAS_HEIGHT * dpr;
        this.ctx.scale(dpr, dpr);
        this.canvas.style.width = this.CANVAS_WIDTH + 'px';
        this.canvas.style.height = this.CANVAS_HEIGHT + 'px';
      }

      adjustPosition(pos, r, max){
        if(pos - r < 0){
          return r;
        }else if(pos + r > max){
          return max - r;
        }else{
          return pos;
        }
      }

      update(){
        this.clear();
        for(let i=0; i < this.balls.length; i++){
          this.balls[i].draw();
          this.balls[i].move();
        }
        setTimeout(e=>{
          this.update();
        }, 30);
      }

      clear(){
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0,0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)
      }
    }

    const canvas = document.getElementById('mycanvas');
    if(!canvas || !canvas.getContext) return false;

    const stage = new Stage(canvas);
    stage.update();
  });
}
