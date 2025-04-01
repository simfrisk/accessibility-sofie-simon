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
const theBody = document.querySelector("body");
const darkmodetoggle = document.querySelector("#dark-mode-icon");
const darkModeContainer = document.querySelector("#dark-mode-container");
const answerBtnContainer = document.querySelector("#answer-btn-container");
const indexPage = document.querySelector("#index-page");
const aboutPage = document.querySelector("#about-page");
const legend = document.querySelector("#legend");
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
        quizResultTitle.innerHTML = "The quiz is over!";
        quizResultText.innerHTML = `Your result is: ${score} / ${questions.length}.`;
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
    if (userChoice === "") {
        legend.innerHTML = "You have not selected an option";
        legend.classList.add("error-text");
        submitAnswerBtn.classList.add("error-btn");
        submitAnswerBtn.classList.add("error-btn");
        // alert("Please select an answer.");
        return; // <-- Stop execution if no option is selected
    }
    if (userChoice === currentQuestion.correctAnswer) {
        console.log("You are correct!");
        resultTitle.innerHTML = currentQuestion.resultTitleWin;
        resultExplanation.innerHTML = currentQuestion.resultExplanationWin;
        score++;
        console.log(score);
    }
    else {
        console.log("Sorry, wrong answer.");
        resultTitle.innerHTML = currentQuestion.resultTitleLose;
        resultExplanation.innerHTML = currentQuestion.resultExplanationLose;
    }
    transition(quizContainer, resultContainer, null);
    if (currentStep % questions.length === questions.length - 1) {
        nextQuestionBtn.innerHTML = "SEE RESULT";
    }
};
const resetErrorStyle = () => {
    legend.innerHTML = "Choose the correct answer:";
    legend.classList.remove("error-text");
    submitAnswerBtn.classList.remove("error-btn");
};
//#endregion
//#region --- Start over ----
const startAgain = () => {
    nextQuestionBtn.innerHTML = "NEXT QUESTION";
    currentStep = -1;
    score = 0;
    transition(quizResult, startPage, null);
};
//#endregion
//#region --- Keyboard Navigation ----
const handleKeyEvent = (event, button, menuIcon, darkModeContainer) => {
    switch (event.key) {
        case "Enter":
            console.log(document.activeElement);
            if (document.activeElement !== button && document.activeElement !== menuIcon && document.activeElement !== indexPage && document.activeElement !== aboutPage && document.activeElement !== darkmodetoggle && document.activeElement !== optionA && document.activeElement !== optionB && document.activeElement !== optionC && document.activeElement !== optionD && document.activeElement !== answerBtnContainer) {
                event.preventDefault();
                button.focus();
            }
            else if (document.activeElement === button) {
                button.click();
            }
            else if (document.activeElement === menuIcon) {
                menuIcon.click();
            }
            else if (document.activeElement === indexPage) {
                indexPage.click();
            }
            else if (document.activeElement === aboutPage) {
                aboutPage.click();
            }
            else if (document.activeElement === darkModeContainer) {
                darkmode();
            }
            else if (document.activeElement === optionA) {
                event.preventDefault();
                optionA.click();
            }
            else if (document.activeElement === optionB) {
                event.preventDefault();
                optionB.click();
            }
            else if (document.activeElement === optionC) {
                event.preventDefault();
                optionC.click();
            }
            else if (document.activeElement === optionD) {
                event.preventDefault();
                optionD.click();
            }
            else if (document.activeElement === answerBtnContainer) {
                loadNextAnswer();
                setTimeout(() => {
                    resultTitle.focus();
                }, 700);
            }
            break;
        // case "Escape":
        //   if (document.activeElement !== button && document.activeElement !== menuIcon && document.activeElement !== indexPage && document.activeElement !== aboutPage && document.activeElement !== darkmodetoggle && document.activeElement !== optionA && document.activeElement !== optionB && document.activeElement !== optionC && document.activeElement !== optionD && document.activeElement !== answerBtnContainer) {
        //     event.preventDefault()
        //   }
        //   else {
        //     event.preventDefault()
        //     darkmode()
        //     optionA.focus()
        //   }
        //   break
        case "ArrowDown":
            if (document.activeElement === optionD) {
                event.preventDefault();
                answerBtnContainer.focus();
                console.log("keydown");
            }
    }
};
const enterKeySelect = (event) => {
    handleKeyEvent(event, submitAnswerBtn, menuIcon, darkModeContainer);
    handleKeyEvent(event, startQuizBtn, menuIcon, darkModeContainer);
    handleKeyEvent(event, nextQuestionBtn, menuIcon, darkModeContainer);
    handleKeyEvent(event, startAgainBtn, menuIcon, darkModeContainer);
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
if (localStorage.getItem("dark-mode") === "enabled") {
    theBody.classList.add("dark-mode");
}
const darkmode = () => {
    console.log("pressed");
    if (theBody.classList.contains("dark-mode")) {
        theBody.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        darkmodetoggle.innerHTML = "DARK";
    }
    else {
        theBody.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        darkmodetoggle.innerHTML = "LIGHT";
    }
};
//#endrigion
//#endregion
//#endregion
//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu);
startQuizBtn.addEventListener("click", loadNextQuestion);
submitAnswerBtn.addEventListener("click", loadNextAnswer);
nextQuestionBtn.addEventListener("click", loadNextQuestion);
startAgainBtn.addEventListener("click", startAgain);
radioButtonCheck.forEach(btn => {
    btn.addEventListener("click", resetErrorStyle);
});
darkmodetoggle.addEventListener("click", darkmode);
document.addEventListener("keydown", enterKeySelect);
//#endregion
