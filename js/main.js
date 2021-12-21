const dropDown = document.querySelectorAll(".dropdown");

dropDown.forEach(function (drop) {
  const link = drop.querySelector(".link");
  const btn = drop.querySelector(".btn");
  link.addEventListener("click", function () {
    dropDown.forEach(function (item) {
      if (item !== drop) {
        item.classList.remove("show-list");
      }
      if (!btn.classList.contains("rotate")) {
        btn.classList.add("rotate");
      } else {
        btn.classList.remove("rotate");
      }
    });
    drop.classList.toggle("show-list");
  });
});

const mobileNav = document.querySelector(".hamburger");
const mobileDrop = document.querySelector(".mobile-dropdown");
const closeBtn = document.querySelector(".close");

mobileNav.addEventListener("click", function () {
  if (mobileDrop.classList.contains("show")) {
    mobileNav.style.display = "block";
  } else {
    mobileDrop.classList.add("show");
    closeBtn.classList.add("show");
    mobileNav.style.display = "none";
  }
});

closeBtn.addEventListener("click", function () {
  mobileNav.style.display = "block";
  closeBtn.classList.remove("show");
  mobileDrop.classList.remove("show");
});
