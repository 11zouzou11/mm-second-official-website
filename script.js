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



<script>
    // Enable automatic carousel interval
    document.addEventListener("DOMContentLoaded", function () {
        const imageCarousel = new bootstrap.Carousel(document.getElementById("imageCarousel"), {
            interval: 2000, // 2 seconds interval for automatic scrolling
        });
    });
</script>