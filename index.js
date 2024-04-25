//Section Transitions

function openMenu() {
    document.body.classList += " menu--open"
  }
  
function closeMenu() {
    document.body.classList.remove('menu--open')
  }





const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
     const boxTop = box.getBoundingClientRect().top;

     if (boxTop<triggerBottom) {
       box.classList.add('show'); 
     } else {
      box.classList.remove('show');
      }   
    })
}

// Testimonial Slides

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

  var timer;
timer = setTimeout(slideIt, 500);
}

document.getElementById("prevBtn").addEventListener("click", function() {
  showSlide(slideIndex - 1);

  
});

document.getElementById("nextBtn").addEventListener("click", function() {
  showSlide(slideIndex + 1);
});






// Show the first slide initially
showSlide(slideIndex);











