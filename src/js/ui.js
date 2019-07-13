document.addEventListener('DOMContentLoaded', e=>{
  const container = document.getElementById('container')
  const nav = document.getElementById('nav')
  const header = document.getElementById('header')
  const main = document.getElementById('main')
  const openBtn = document.getElementById('openBtn')

  openBtn.addEventListener('click', e=>{
    openBtn.classList.toggle('js-open');
    container.classList.toggle('js-open');
    nav.classList.toggle('js-open');
    header.classList.toggle('js-open');
    main.classList.toggle('js-open');
    if(openBtn.classList.contains('js-open')){
      openBtn.textContent = '閉じる';
    }else{
      openBtn.textContent = '開く';
    }
  })
})
