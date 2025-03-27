"use strict";
//#endregion
//#region --- DOM Elements ----- 
const navLinks = document.querySelector("#nav-links");
const menuIcon = document.querySelector("#menu-icon");
const startQuizBtn = document.querySelector("#start-quiz-btn");
const questionTitle = document.querySelector("#question-title");
const questionText = document.querySelector("#question-text");
const optionA = document.querySelector("#option-a");
const optionB = document.querySelector("#option-b");
const optionC = document.querySelector("#option-c");
const optionD = document.querySelector("#option-d");
const resultTitle = document.querySelector("#result-title");
const resultExplanation = document.querySelector("#result-explanation");
const submitAnswerBtn = document.querySelector("#answer-btn");
const nextQuestionBtn = document.querySelector("#next-question-btn");
let currentStep = 0;
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
//#region --- Load Next Question -----
const loadNextQuestion = () => {
    console.log("testing");
    // nextStep()
    const currentQuestion = questions[currentStep];
    questionTitle.innerHTML = (currentQuestion.questionTitle);
    questionText.innerHTML = (currentQuestion.questionText);
    optionA.innerHTML = (`A: ${currentQuestion.options[0]}`);
    optionB.innerHTML = (`B: ${currentQuestion.options[1]}`);
    optionC.innerHTML = (`C: ${currentQuestion.options[2]}`);
    optionD.innerHTML = (`D: ${currentQuestion.options[3]}`);
    // else
    // Show result slide
};
//#endregion
//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu);
startQuizBtn.addEventListener("click", loadNextQuestion);
//#endregion
