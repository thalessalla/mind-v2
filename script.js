function scrollAnimado() {
  const sections = document.querySelectorAll(".js-fade-up");
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo-scroll");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}

const sections = document.querySelectorAll(".js-fade-right");
const windowMetade = window.innerHeight * 0.6;
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add("ativo-scroll-right");
    }
  });
}

window.addEventListener("scroll", animaScroll);

scrollAnimado();