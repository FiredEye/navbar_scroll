const sections = document.querySelectorAll("section"),
  navLinks = document.querySelectorAll("nav a"),
  backToTopButton = document.getElementById("back-to-top-btn");

const resetLinks = () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
};
const handleScroll = () => {
  const { pageYOffset } = window;
  sections.forEach((section) => {
    const { id, offsetTop, clientHeight } = section;
    const offset = offsetTop - 50;
    if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
      resetLinks();
      navLinks.forEach((link) => {
        if (link.dataset.scroll === id) {
          link.classList.add("active");
        }
      });
    }
  });
};

document.addEventListener("scroll", handleScroll);
backToTopButton.addEventListener("click", function () {
  const scrollToTop = window.setInterval(function () {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 40); // how far to scroll on each step
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 14); // how often to repeat the scroll steps in milliseconds (60 fps)
});
