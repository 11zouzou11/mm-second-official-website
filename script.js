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
  

  // Scrolling banner functionality
  function startScrolling() {
    const container = $(".scrolling-banner-container");
    const banner = $(".scrolling-banner");
    const firstLogo = banner.children().first();

    // Calculate the total width of the logos in the banner
    const totalWidth = banner.children().length * (firstLogo.outerWidth() + 20); // 20px for padding

    // Set the initial position of the banner
    banner.css("width", totalWidth + "px").css("left", container.outerWidth() + "px");

    // Function to animate the scrolling
    function animateScrolling() {
      banner.animate({ left: -totalWidth + "px" }, totalWidth * 30, "linear", function() {
        banner.css("left", container.outerWidth() + "px");
        animateScrolling();
      });
    }

    animateScrolling();
  }

  startScrolling();
});