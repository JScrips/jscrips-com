const mobileButton = document.querySelector('.mobilebutton');
const actualMenu = document.querySelector('.actualMenu');

mobileButton.addEventListener('click', accessMenu)

function accessMenu(){
actualMenu.classList.toggle('translate-x-20')

}