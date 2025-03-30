"use strict";
//#region --- DOM Elements ----- 
const navLinks = document.querySelector("#nav-links");
const menuIcon = document.querySelector("#menu-icon");
const startQuizBtn = document.querySelector("#start-quiz-btn");
const questionTitle = document.querySelector("#question-title");
const questionText = document.querySelector("#question-text");
// const optionA2 = document.querySelector('label[for="question1"]')
const optionA = document.querySelector('label[for="option-a"]');
const optionB = document.querySelector('label[for="option-b"]');
const optionC = document.querySelector('label[for="option-c"]');
const optionD = document.querySelector('label[for="option-d"]');
const resultTitle = document.querySelector("#result-title");
const resultExplanation = document.querySelector("#result-explanation");
const submitAnswerBtn = document.querySelector("#answer-btn");
const nextQuestionBtn = document.querySelector("#next-question-btn");
const startPage = document.querySelector("#start-page");
const quizContainer = document.querySelector("#quiz-container");
const resultContainer = document.querySelector("#result-container");
const quizResult = document.querySelector("#quiz-result");
const quizResultTitle = document.querySelector("#quiz-result-title");
const quizResultText = document.querySelector("#quiz-result-text");
const startAgainBtn = document.querySelector("#start-again-btn");
const selectionForm = document.querySelector("#selection-from");
const radioButtonGroup = document.querySelector(".radio-button-group");
const radioButtonCheck = document.querySelectorAll('input[name="question1"]');
const backBtn = document.querySelector("#back-btn");
let currentStep = -1;
let userChoice = "";
let currentQuestion = null;
let score = 0;
//#endregion
//#region --- Functions -----
//#region --- User Idetifier -----
const userChoiseIdentifier = () => {
    const options = document.querySelectorAll('input[name="question1"]');
    options.forEach(button => {
        button.addEventListener("change", (event) => {
            userChoice = event.target.value;
            console.log(`User selected: ${userChoice} and correct is ${currentQuestion.correctAnswer}`);
        });
    });
};
userChoiseIdentifier();
//#endregion
//#region --- Burger Menu -----
const burgerMenu = () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
};
//#endregion
//#region --- Load Next Question -----
const loadNextQuestion = () => {
    userChoice = "";
    currentStep++;
    radioButtonCheck.forEach((radio) => {
        radio.checked = false;
    });
    console.log(currentStep);
    if (currentStep >= questions.length) {
        quizResultTitle.innerHTML = "Quiz is over";
        quizResultText.innerHTML = `Your score is: ${score} / ${questions.length}`;
        transition(resultContainer, quizResult, null);
    }
    else {
        currentQuestion = questions[currentStep];
        questionTitle.innerHTML = (`Question ${currentStep + 1}/${questions.length}`);
        questionText.innerHTML = (currentQuestion.questionText);
        optionA.innerHTML = (currentQuestion.options[0]);
        optionB.innerHTML = (currentQuestion.options[1]);
        optionC.innerHTML = (currentQuestion.options[2]);
        optionD.innerHTML = (currentQuestion.options[3]);
        transition(resultContainer, quizContainer, startPage);
    }
};
//#endregion
//#region --- Load answer -----
const loadNextAnswer = (event) => {
    if (event)
        event.preventDefault();
    if (userChoice === currentQuestion.correctAnswer) {
        console.log("You are correct!");
        resultTitle.innerHTML = currentQuestion.resultTitleWin;
        resultExplanation.innerHTML = currentQuestion.resultExplanationWin;
        score++;
        console.log(score);
    }
    else if (userChoice === "") {
        alert("Please select an answer.");
    }
    else {
        console.log("Sorry, wrong answer.");
        resultTitle.innerHTML = currentQuestion.resultTitleLose;
        resultExplanation.innerHTML = currentQuestion.resultExplanationLose;
    }
    transition(quizContainer, resultContainer, null);
    if (currentStep % questions.length === questions.length - 1) {
        nextQuestionBtn.innerHTML = "SEE RESULTS";
    }
};
//#endregion
//#region --- Start over ----
const startAgain = () => {
    nextQuestionBtn.innerHTML = "NEXT QUESTION";
    transition(quizResult, startPage, null);
    currentStep = -1;
    score = 0;
};
//#endregion
//#region --- Keyboard Navigation ----
const handleKeyEvent = (event, button) => {
    if (event.key === "Enter" || ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(event.key)) {
        if (document.activeElement !== button) {
            event.preventDefault();
            button.focus();
        }
        else if (event.key === "Enter") {
            button.click();
        }
    }
};
const enterKeySelect = (event) => {
    handleKeyEvent(event, startQuizBtn);
    handleKeyEvent(event, nextQuestionBtn);
    handleKeyEvent(event, startAgainBtn);
};
//#endregion
//#region --- transition ----
const transition = (hideElement, showElement, hideElementExtra) => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
        hideElement.style.zIndex = ("0");
        showElement.style.zIndex = ("1");
        showElement.classList.remove("hide");
        showElement.classList.remove("offset");
        hideElement.classList.add("hide");
        hideElement.classList.add("offset");
        if (hideElementExtra)
            hideElementExtra.classList.add("hide");
        hideElementExtra.classList.add("offset");
    }
    else {
        hideElement.style.zIndex = ("0");
        showElement.style.zIndex = ("1");
        showElement.classList.remove("hide");
        requestAnimationFrame(() => {
            showElement.classList.remove("offset");
        });
        setTimeout(() => {
            hideElement.classList.add("hide");
            hideElement.classList.add("offset");
            if (hideElementExtra)
                hideElementExtra.classList.add("hide");
            hideElementExtra.classList.add("offset");
        }, 700);
    }
};
//#endregion
//#region --- Dark mode ----
const theBody = document.querySelector("body");
const darkmodetoggle = document.querySelector("#dark-mode-icon");
if (localStorage.getItem("dark-mode") === "enabled") {
    theBody.classList.add("dark-mode");
}
const darkmode = () => {
    console.log("pressed");
    if (theBody.classList.contains("dark-mode")) {
        theBody.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
    else {
        theBody.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    }
};
//#endrigion
//#endregion
//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu);
startQuizBtn.addEventListener("click", loadNextQuestion);
submitAnswerBtn.addEventListener("click", loadNextAnswer);
nextQuestionBtn.addEventListener("click", loadNextQuestion);
startAgainBtn.addEventListener("click", startAgain);
// document.addEventListener("keydown", enterKeySelect);
darkmodetoggle.addEventListener("click", darkmode);
//#endregion
