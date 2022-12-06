const navLinksLi = document.querySelectorAll(".nav__links li");
const contentFirstH3 = document.querySelectorAll(".content__first h3");
const firstButton = document.querySelector(".first--button");
const sectionFirstH3 = document.querySelectorAll(".section__second h3");

const drop = document.querySelector(".menu__open");
const nav = document.querySelector(".nav__links");
const close = document.querySelector(".menu__close");

drop.addEventListener("click", function () {
  nav.style.display = "block";
  drop.style.display = "none";
  close.style.display = "block";
});
close.addEventListener("click", function () {
  nav.style.display = "none";
  drop.style.display = "block";
});
navLinksLi.forEach((li) =>
  li.addEventListener("click", () => {
    navLinksLi.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
  })
);

contentFirstH3.forEach((h3) =>
  h3.addEventListener("click", () => {
    contentFirstH3.forEach((h3) => h3.classList.remove("active"));
    h3.classList.add("active");
  })
);

firstButton.addEventListener("click", () =>
  firstButton.classList.toggle("touch")
);

sectionFirstH3.forEach((h3) =>
  h3.addEventListener("click", () => {
    sectionFirstH3.forEach((h3) => h3.classList.remove("active"));
    h3.classList.add("active");
  })
);
