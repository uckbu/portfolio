// Typing Animation
const typingAnimation = document.querySelector('.typing-animation');
const name = "john balci";
let index = 0;

function typeWriter() {
  if (index < name.length) {
    typingAnimation.innerHTML += name.charAt(index);
    index++;
    setTimeout(typeWriter, 200);
    }
    }
    
    document.addEventListener('DOMContentLoaded', typeWriter);
    
    // Burger Menu
    const burgerMenu = document.querySelector('.burger-menu');
    const menuLinks = document.querySelector('.menu-links');
    
    burgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
    if (!burgerMenu.contains(event.target)) {
    burgerMenu.classList.remove('active');
    }
    });