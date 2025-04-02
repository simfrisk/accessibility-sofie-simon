"use strict";
const navLinks = document.querySelector("#nav-links");
const menuIcon = document.querySelector("#menu-icon");
const burgerMenu = () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
};
