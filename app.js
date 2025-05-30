// Når hele dokumentet er indlæst og klar
document.addEventListener("DOMContentLoaded", function () {

  // Hent scroll-to-top knappen fra DOM'en
  const scrollBtn = document.getElementById("scrollToTopBtn");

  // Lyt efter scroll-begivenhed på vinduet
  window.addEventListener("scroll", () => {
    // Hvis der scrolles mere end 300px ned på siden
    if (window.scrollY > 300) {
      // Vis knappen ved at sætte display til "flex"
      scrollBtn.style.display = "flex";
    } else {
      // Skjul knappen hvis der scrolles mindre end 300px
      scrollBtn.style.display = "none";
    }
  });

  // Lyt efter klik på scroll-to-top knappen
  scrollBtn.addEventListener("click", () => {
    // Scroll tilbage til toppen af siden med blød animation
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});



// Når hele dokumentet er indlæst og klar
document.addEventListener("DOMContentLoaded", function () {

  // Hent burger-menu ikonet
  const burger = document.querySelector(".burger-menu");

  // Hent mobil-navigationen (skjult som udgangspunkt)
  const mobileNav = document.getElementById("mobileNav");

  // Lyt efter klik på burger-menuen
  burger.addEventListener("click", function () {
    // Skift mellem at vise og skjule mobilmenuen
    mobileNav.classList.toggle("active");
  });
});


