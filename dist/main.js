"use strict";
//#endregion
//#region --- DOM Elements ----- 
const navLinks = document.querySelector("#nav-links");
const menuIcon = document.querySelector("#menu-icon");
//#endregion
//#region --- Object -----
const questions = [
    {
        id: "question1",
        currentStep: 1,
        questionTitle: "Question 1",
        questionText: "What is a screen reader?",
        options: ["A car", "A digital text reader", "A cat", "A fruite"],
        correctAnswer: "A digital text reader",
        resultTitle: "answerTitle",
        resultExplanation: "answerExplanation"
    },
    {
        id: "question2",
        questionTitle: "Question 2",
        questionText: "What is ...2",
        currentStep: 2,
        options: ["option A", "option B", "option C", "option D"],
        correctAnswer: "option 1",
        resultTitle: "answerTitle",
        resultExplanation: "answerExplanation"
    },
    {
        id: "question3",
        currentStep: 3,
        questionTitle: "Question 3",
        questionText: "What is ...3",
        options: ["option A", "option B", "option C", "option D"],
        correctAnswer: "option 1",
        resultTitle: "answerTitle",
        resultExplanation: "answerExplanation"
    }
];
//#endregion
//#region --- Functions -----
//#region --- Burger Menu -----
const burgerMenu = () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
};
//#endregion
//#endregion
//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu);
//#endregion
