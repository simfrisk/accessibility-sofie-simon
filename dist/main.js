"use strict";
//#endregion
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
let currentStep = -1;
let userChoice = "";
let currentQuestion = null;
//#endregion
//#region --- Object -----
const questions = [
    {
        id: "question1",
        currentStep: 1,
        questionTitle: "Question 1",
        questionText: "What is a screen reader?",
        options: ["A car", "A digital text reader", "A cat", "A fruite"],
        correctAnswer: "B",
        resultTitleWin: "Congratulations",
        resultExplanationWin: "You got it right!",
        resultTitleLose: "Oh no!",
        resultExplanationLose: "You got it wrong"
    },
    {
        id: "question2",
        questionTitle: "Question 2",
        questionText: "What is an alt text? A description of..",
        currentStep: 2,
        options: ["an image", "a div element", "a header", "a link"],
        correctAnswer: "A",
        resultTitleWin: "Congratulations",
        resultExplanationWin: "You got it right!",
        resultTitleLose: "Oh no!",
        resultExplanationLose: "You got it wrong"
    },
    {
        id: "question3",
        currentStep: 3,
        questionTitle: "Question 3",
        questionText: "What is the purpose of a 'skip to content' link?",
        options: ["to skip advertisements", "to skip the navigation", "to skip to all images", "to skip the footer"],
        correctAnswer: "B",
        resultTitleWin: "Congratulations",
        resultExplanationWin: "You got it right!",
        resultTitleLose: "Oh no!",
        resultExplanationLose: "You got it wrong"
    }
];
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
    console.log("testing");
    // nextStep()
    currentStep++;
    //! If last question go to resaults
    currentQuestion = questions[currentStep];
    questionTitle.innerHTML = (currentQuestion.questionTitle);
    questionText.innerHTML = (currentQuestion.questionText);
    optionA.innerHTML = (currentQuestion.options[0]);
    optionB.innerHTML = (currentQuestion.options[1]);
    optionC.innerHTML = (currentQuestion.options[2]);
    optionD.innerHTML = (currentQuestion.options[3]);
    quizContainer.style.display = ("block");
    quizContainer.style.transform = ("translateY(0dvh)");
    startPage.style.display = ("none");
    resultContainer.style.display = ("none");
    // else
    // Show result slide
};
//#endregion
//#region --- Load answer -----
const loadNextAnswer = (event) => {
    if (event)
        event.preventDefault();
    if (userChoice === currentQuestion.correctAnswer) {
        console.log("You are correct!");
        resultTitle.innerText = currentQuestion.resultTitleWin;
        resultExplanation.innerText = currentQuestion.resultExplanationWin;
        //! Add + 1 to score
    }
    else if (userChoice === "") {
        alert("Please select an answer.");
    }
    else {
        console.log("Sorry, wrong answer.");
        resultTitle.innerText = currentQuestion.resultTitleLose;
        resultExplanation.innerText = currentQuestion.resultExplanationLose;
    }
    resultContainer.style.display = ("block");
    resultContainer.style.transform = ("translateY(0dvh)");
    quizContainer.style.display = ("none");
};
//#endregion
//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu);
startQuizBtn.addEventListener("click", loadNextQuestion);
submitAnswerBtn.addEventListener("click", loadNextAnswer);
nextQuestionBtn.addEventListener("click", loadNextQuestion);
//#endregion
//#endregion
