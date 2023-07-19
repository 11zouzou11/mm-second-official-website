document.getElementById("toggleModeBtn").addEventListener("click", toggleMode);

function toggleMode() {
  const body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
}


$(document).ready(function() {
    // Handle carousel navigation on arrow click
    $(".carousel-control-prev").click(function() {
      $("#carouselExampleControls").carousel("prev");
    });
  
    $(".carousel-control-next").click(function() {
      $("#carouselExampleControls").carousel("next");
    });
  });
  