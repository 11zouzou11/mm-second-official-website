// Smooth scrolling when clicking on navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const navbarHeight = document.querySelector(".navbar").offsetHeight;

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = targetPosition - navbarHeight;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const videoBg = document.getElementById('video-bg');
  if (videoBg) {
    // Set the playback rate to 0.5 (50% slower speed)
    videoBg.playbackRate = 0.5;
  }
});



<script>
    // Enable automatic carousel interval
    document.addEventListener("DOMContentLoaded", function () {
        const imageCarousel = new bootstrap.Carousel(document.getElementById("imageCarousel"), {
            interval: 1000, // 2 seconds interval for automatic scrolling
        });
    });
</script>


