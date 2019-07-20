'user strict';

{
  document.addEventListener('DOMContentLoaded', e=>{
    function draw(){
      const canvas = document.querySelector('canvas');
      if(typeof canvas.getContext === 'undefined'){
        return;
      }
      const ctx = canvas.getContext('2d');
      // ---------------------------
      // 解像度設定
      // ---------------------
      const CANVAS_WIDTH = 800;
      const CANVAS_HEIGHT = 600;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = CANVAS_WIDTH * dpr;
      canvas.height = CANVAS_HEIGHT * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = CANVAS_WIDTH + 'px';
      canvas.style.height = CANVAS_HEIGHT + 'px';

      //-------------------------------
      // ctx.createLinearGradient(x0,y0,x1,y2);
      const g = ctx.createLinearGradient(0,0,CANVAS_WIDTH,0);
      g.addColorStop(0, '#f00');
      g.addColorStop(0.3, '#0f0');
      g.addColorStop(1, '#00f');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT/5);

      //-------------------------------
      // ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
      const rg = ctx.createRadialGradient(
        CANVAS_WIDTH / 2, CANVAS_HEIGHT / 5, 50,
        CANVAS_WIDTH / 2 + 100, CANVAS_HEIGHT / 2 + 100, 500
      );
      rg.addColorStop(0, '#f00');
      rg.addColorStop(0.1, '#0f0');
      rg.addColorStop(1, '#00f');
      ctx.fillStyle = rg;
      ctx.fillRect(0, CANVAS_HEIGHT/5, CANVAS_WIDTH, CANVAS_HEIGHT/5);

      //-------------------------------
      //
      // ctx.fillRect(x,y,width,height);
      ctx.fillStyle = 'pink';
      ctx.strokeStyle = '#f00';
      ctx.lineWidth = 3;
      ctx.lineJoin = 'round';

      ctx.fillRect(50,CANVAS_HEIGHT/3*2,50,50);
      ctx.strokeRect(50,CANVAS_HEIGHT/3*2,50,50);

      ctx.fillStyle = 'skyblue';
      ctx.strokeStyle = '#00f';
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';

      ctx.fillRect(100,CANVAS_HEIGHT/3*2+20,50,50);
      ctx.strokeRect(100,CANVAS_HEIGHT/3*2+20,50,50);

      //-------------------------------
      // path
      //-------------------------------
      ctx.beginPath();
      let x = 400;
      let y = 500;
      ctx.moveTo(x, y);
      ctx.lineTo(x+50, y+10);
      ctx.lineTo(x+50, y+50);
      ctx.closePath();
      ctx.setLineDash([5,10]);
      ctx.stroke();
      // ctx.fill();

      ctx.beginPath();
      x = 400;
      y = 400;
      ctx.moveTo(x, y);
      ctx.lineTo(x+50, y+10);
      ctx.setLineDash([]);
      ctx.lineWidth = 16;
      ctx.lineCap = 'round';
      ctx.stroke();

      //-------------------------------
      // round
      //-------------------------------
      let count = 0;
      function drawRound(){
        ctx.beginPath();
        ctx.strokeStyle = '#00f';
        x = CANVAS_WIDTH-500-count;
        y = CANVAS_HEIGHT-200+count;
        ctx.arc(x, y, 20+count, 0, 2 * Math.PI, true);
        ctx.lineWidth = 1;
        ctx.stroke();
        count+=3;
        setTimeout(()=>{
          if(count >= 200){ return; }
          drawRound();
        },100);
      }
      drawRound();

      //-------------------------------
      // text
      //-------------------------------
      let textPosition = 0;
      function drawText(){
        ctx.clearRect(0, 240, 350, 100);
        ctx.strokeStyle = 'pink';
        ctx.font = 'bold 65px Verdana';
        ctx.lineWidth = 3;
        ctx.shadowBlur = 0;
        ctx.strokeText('タピオカ', textPosition, 300)
        textPosition+=3;
        setTimeout(()=>{
          if(textPosition >= 100){ return; }
          drawText();
        },100);
      }
      drawText();

      setTimeout(()=>{
        ctx.fillStyle = 'black';
        ctx.font = 'bold 65px Verdana';
        ctx.shadowBlur = 0;
        ctx.strokeText('ミルクティー', 350, 300, 100)
        //-------------------------------
        // image
        //-------------------------------
        const img = document.createElement('img');
        img.src = 'image/tapioka.png'
        img.addEventListener('load', e=>{
          ctx.drawImage(img, 200, 400, 200, 200)
        })
      },8000);

      //-------------------------------
      // charactor
      //-------------------------------
      let t = 0;

      function eyeDraw(){
        ctx.clearRect(500,300,500, 800);

        ctx.beginPath();
        ctx.ellipse(600, 400, 40, 30, 0, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.shadowColor = '';
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(580, 400 + Math.sin(t /30), 8, 8, 0, 0, 2 * Math.PI);
        ctx.ellipse(620, 400 + Math.sin(t /30), 8, 8, 0, 0, 2 * Math.PI);
        ctx.fillStyle = 'skyblue';
        ctx.fill();
        t++;
        setTimeout(e=>{
          eyeDraw()
        },10)
      }
      eyeDraw();
    }
    draw();
  });
}
