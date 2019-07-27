'user strict';

{
  document.addEventListener('DOMContentLoaded', e=>{

    let canvas;
    let ctx;
    let Ball;
    let Stage;
    let stage;
    let balls = [];

    canvas = document.getElementById('mycanvas');
    if(!canvas || !canvas.getContext) return false;
    ctx = canvas.getContext('2d');

    function rand(min, max){
      return min + Math.floor(Math.random() * (max-min+1));
    }

    function adjustPosition(pos, r, max){
      if(pos - r < 0){
        return r;
      }else if(pos + r > max){
        return max - r;
      }else{
        return pos;
      }
    }

    canvas.addEventListener('click', e=>{
      let x, y, r;
      let rect = e.target.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      r = rand(0, 100) < 20 ? rand(50, 80) : rand(10, 35);

      x = adjustPosition(x, r, canvas.width);
      y = adjustPosition(y, r, canvas.height);
      balls.push(new Ball(x, y, r));
    })

    Ball = function(x, y, r){
      this.x = x;
      this.y = y;
      this.r = r;
      this.vx = rand(-10, 10); // 加速度
      this.vy = rand(-10, 10); // 加速度
      this.color = `hsla(${rand(50,100)}, ${rand(40,80)}%, ${rand(40,80)}%, ${Math.random()})`;
    };

    Ball.prototype.draw = function(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.closePath();
      ctx.fill();
    }

    Ball.prototype.move = function(){
      if(this.x + this.r > canvas.width || this.x - this.r < 0){
        this.vx *= -1;
      }
      if(this.y + this.r > canvas.height || this.y - this.r < 0){
        this.vy *= -1;
      }
      this.x += this.vx;
      this.y += this.vy;
    }

    Stage = function(){
      this.update = function(){
        this.clear();
        for(let i=0; i < balls.length; i++){
          balls[i].draw();
          balls[i].move();
        }
        setTimeout(e=>{
          this.update();
        }, 30);
      }

      this.clear = function(){
        ctx.fillStyle = 'white';
        ctx.fillRect(0,0, canvas.width, canvas.height)
      }
    }

    stage = new Stage();
    stage.update();

  });
}
