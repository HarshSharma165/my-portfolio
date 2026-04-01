
// HAMBURGER MENU
function hamburg() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.top = "0";
}

function cancel() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.top = "-500px";
}


// TYPEWRITER EFFECT
const words = ["Developer", "Designer",  "Student"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const typewriter = document.querySelector(".typewriter-text");

function typeEffect() {
  currentWord = words[i];

  if (isDeleting) {
    typewriter.textContent = currentWord.substring(0, j--);
  } else {
    typewriter.textContent = currentWord.substring(0, j++);
  }

  // speed control
  let speed = isDeleting ? 50 : 100;

  // word complete
  if (!isDeleting && j === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  }

  // word deleted
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

// start typing when page loads
document.addEventListener("DOMContentLoaded", () => {
  if (typewriter) {
    typeEffect();
  }
});
