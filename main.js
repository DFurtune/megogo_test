"use strict";

function openNav() {
  hamburger.classList.add("is-active");
  document.getElementById("popUpNav").style.display = "block";
}

function closeNav() {
  hamburger.classList.remove("is-active");
  document.getElementById("popUpNav").style.display = "none";
}

// Hamburger Menu Spin
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () =>
  hamburger.classList.contains("is-active") ? closeNav() : openNav()
);

closeNav();
