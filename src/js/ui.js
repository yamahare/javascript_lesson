document.addEventListener('DOMContentLoaded', e=>{
  const sidenav = document.getElementsByClassName('sidenav')[0];
  const overlay = document.getElementById('closeOverlay');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementsByClassName('sidenav__close')[0];

  openBtn.addEventListener('click', e => {
    sidenav.classList.add('active');
    overlay.style.display="block";
  })
  function closeSidenav(){
    sidenav.classList.remove('active');
    overlay.style.display="none";
  }
  closeBtn.addEventListener('click', closeSidenav);
  overlay.addEventListener('click', closeSidenav);
})
