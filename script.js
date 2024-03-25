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
  menuLinks.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  if (!burgerMenu.contains(event.target) && !menuLinks.contains(event.target)) {
    burgerMenu.classList.remove('active');
    menuLinks.classList.remove('active');
  }
});

// Smooth Scroll
const menuItems = document.querySelectorAll('.menu-links a');

menuItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const topOffset = document.querySelector('header').offsetHeight;
    const elementPosition = targetElement.offsetTop;
    const offsetPosition = elementPosition - topOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    burgerMenu.classList.remove('active');
    menuLinks.classList.remove('active');
  });
});

// Page Navigation
const pageLinks = document.querySelectorAll('.menu-links a');

pageLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetPage = this.getAttribute('href');
    window.location.href = targetPage;
  });
});

document.addEventListener('mousemove', function(e) {
  var cursorCircle = document.getElementById('cursor-circle');
  cursorCircle.style.left = e.clientX - 20 + 'px';
  cursorCircle.style.top = e.clientY - 20 + 'px';
});