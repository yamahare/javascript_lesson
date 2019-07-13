document.addEventListener('DOMContentLoaded', e=>{
  const sidenav = document.getElementsByClassName('sidenav')[0];
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementsByClassName('sidenav__close')[0];

  openBtn.addEventListener('click', e => {
    sidenav.classList.add('active');
  })
  closeBtn.addEventListener('click', e => {
    sidenav.classList.remove('active');
  })
})
