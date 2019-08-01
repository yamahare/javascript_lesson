'user strict';

{
  document.addEventListener('DOMContentLoaded', e=>{

    class Maze{
      constructor(col, row){
        // 迷路を配列で用意
        // 0 0 0
        // 0 1 0
        // 0 1 0
        // map[x][y]
        this.map = [];
        // map[0] = [0, 0, 0];
        // map[1] = [0, 1, 0];
        // map[2] = [0, 1, 0];
        this.points = [
          [0, -1], // 上
          [0, 1], // 下
          [1, 0], // 右
          [-1, 0], // 左
        ]
        this.col = col;
        this.row = row;
        this.START_X = 0;
        this.START_Y = 0;
        this.GOAL_X = col-1;
        this.GOAL_Y = row-1;
      }

      rand(n){
        return Math.floor(Math.random() * (n+1));
      }

      init(){
        //棒倒し法で作る
        //1. １つ飛びに壁（棒）をつくる
        //2. 1列目の棒を上下左右のどちらかに倒す
        //3. 2列目以降の棒を左以外のどれかに倒す
        for(let x=0; x<this.col; x++){
          this.map[x] = [];
          for(let y=0; y<this.row; y++){
            this.map[x][y] = 0;
          }
        }

        //1. １つ飛びに壁（棒）をつくる
        for(let x=1; x<this.col; x+=2){
          for(let y=1; y<this.row; y+=2){
            this.map[x][y]=1;
          }
        }

        for(let x=1; x<this.col; x+=2){
          for(let y=1; y<this.row; y+=2){
            let r = undefined;
            do{
              //2. 1列目の棒を上下左右のどちらかに倒す
              if(x === 1){
                r = this.points[this.rand(3)];
              //3. 2列目以降の棒を左以外のどれかに倒す
              }else{
                r = this.points[this.rand(2)];
              }
            }while(this.map[x + r[0]][y + r[1]] === 1)
            this.map[x + r[0]][y + r[1]] = 1;
          }
        }
      }

      draw(){
        let view = new View();
        view.draw(this);
      }
    }

    class View{

      constructor(){
        this.ROUTE_COLOR = '#FF0088';
        this.SQUARES_SIZE = 10;
        this.SQUARES_COLOR = '#3261AB';
        this.canvas = document.getElementById('mycanvas');
        if(!this.canvas || !this.canvas.getContext) return false;
        this.ctx = this.canvas.getContext('2d');
      }

      draw(maze){
        this.canvas.width = (maze.col + 2) * this.SQUARES_SIZE;
        this.canvas.height = (maze.row + 2) * this.SQUARES_SIZE;

        // 上下の壁
        for(let x=0; x<=maze.col+2; x++){
          this.drawWall(x, 0);
          this.drawWall(x, maze.row+1);
        }
        // 左右の壁
        for(let y=0; y<=maze.col+2; y++){
          this.drawWall(0, y);
          this.drawWall(maze.col+1, y);
        }
        // 内部の壁
        for(let x=0; x<maze.col; x++){
          for(let y=0; y<maze.row; y++){
            if(maze.map[y][x] === 1){
              this.drawWall(x+1, y+1);
            }
            if((x === maze.START_X && y === maze.START_Y) || (x === maze.GOAL_X && y === maze.GOAL_Y)){
              this.drawRoute(x+1, y+1);
            }
          }
        }
      }

      drawWall(x, y){
        this.ctx.fillStyle = this.SQUARES_COLOR;
        this.drawRect(x,y);
      }

      drawRoute(x, y){
        this.ctx.fillStyle = this.ROUTE_COLOR;
        this.drawRect(x,y);
      }

      drawRect(x,y){
        this.ctx.fillRect(
          x * this.SQUARES_SIZE,
          y * this.SQUARES_SIZE,
          this.SQUARES_SIZE,
          this.SQUARES_SIZE
        );
      }
    }

    function reset(){
      let maze = new Maze(13, 13);
      maze.init();
      maze.draw();
    }

    document.getElementById('reset').addEventListener('click', e=>{
      reset();
    })

    reset()
  });
}
