document.addEventListener("DOMContentLoaded", function () {
  // Wow Js Animation init
  new WOW().init();
  // Navbar add background on scroll
  var scrollPosition = window.scrollY;
  var logoContainer = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 10) {
      logoContainer.classList.add("scroll");
    } else {
      logoContainer.classList.remove("scroll");
    }
  });

  //   Sidebar Collapse
  const btnMenu = document.getElementById("menu-icon-trigger");
  btnMenu.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".menu-icon-wrapper").classList.toggle("open");
    document.querySelector(".nav-links").classList.toggle("is-open");
  });
});
