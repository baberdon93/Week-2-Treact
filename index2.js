
document.addEventListener("click", function(event) {
  if (event.target.matches(".dropdown-btn")) {
    var dropdown = event.target.closest(".dropdown");
    var dropdownMenu = dropdown.querySelector(".dropdown-menu");
    var arrow = dropdown.querySelector(".arrow");

    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
      dropdownMenu.style.display = "block";
      arrow.classList.add("rotated");
    } else {
      dropdownMenu.style.display = "none";
      arrow.classList.remove("rotated");
    }
  }
})










// Show the first slide initially
showSlide(slideIndex);


