// desktop nav

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

// mobile nav

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

// modal

const modalForm = document.querySelector(".form-overlay");
const signUpBtn = document.querySelectorAll(".sign");

signUpBtn.forEach(function (modal) {
  modal.addEventListener("click", function () {
    modalForm.classList.add("open-form");
  });
});

closeBtn.addEventListener("click", function () {
  modalForm.classList.remove("open-form");
});

// Form

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = form["firstname"].value;
  const lastname = form["lastname"].value;
  const emailInput = form["email"].value;
  if (firstname === "") {
    addError("firstname", "Please enter your first name!");
  } else {
    removeError("firstname");
  }

  if (lastname === "") {
    addError("lastname", "Please enter your last name!");
  } else {
    removeError("lastname");
  }

  if (emailInput === "") {
    addError("email", "Please enter your email!");
  } else if (!isValid(emailInput)) {
    addError("email", "Please enter a valid email!");
  } else {
    removeError("email");
  }
});

function addError(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = form[field].parentNode.querySelector("small");
  small.innerText = message;
}

function removeError(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
  form[field].value = "";
}

function isValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
