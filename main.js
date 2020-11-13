const menu = document.querySelector('.hamburger');
const navs = document.querySelector('.navs');
const close = document.querySelector('.close');
const open = document.querySelector('.open');

menu.addEventListener('click', addLinks);

function addLinks(){
  navs.classList.toggle('show-links')
  close.classList.toggle('show')
  open.classList.toggle('hide')
}