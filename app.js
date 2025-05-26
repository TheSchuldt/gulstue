document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const mobileNav = document.getElementById("mobileNav");

    burger.addEventListener("click", function () {
      mobileNav.classList.toggle("active");
    });
  });

