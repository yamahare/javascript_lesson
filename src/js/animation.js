'user strict';

{
  document.addEventListener('DOMContentLoaded', e=>{

    document.getElementById('move').addEventListener('click', e=>{
      document.querySelectorAll('.box').forEach(box=>{
        box.classList.add('moved');
      });
    })

    document.getElementById('spin').addEventListener('click', e=>{
      document.querySelector('.spinBox').classList.add('spin');
    })
  });
}
