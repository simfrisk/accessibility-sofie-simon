"use strict";
//#endregion
//#region --- Object -----
const questions = [
    {
        id: "question1",
        currentStep: 1,
        questionTitle: "Question ",
        questionText: "Which of the following is NOT a principle of the WCAG?",
        options: ["Perceivable", "Operable", "Flexible", "Robust"],
        correctAnswer: "C",
        resultTitleWin: "Congratulations!",
        resultExplanationWin: "This is correct. Perceivable, Operable, Understandable and Robust are the four main principles. Well done!",
        resultTitleLose: "Oh no!",
        resultExplanationLose: "You got it wrong. Perceivable, Operable, Understandable and Robust are the four main principles."
    },
    {
        id: "question2",
        questionText: "What does ARIA stand for?",
        questionTitle: "Question ",
        currentStep: 2,
        options: ["Accessible Rich Internet Applications", "Advanced Responsive Internet Accessibility", "Automated Resource Integration API", "Assistive Rendering & Interaction Attributes"],
        correctAnswer: "A",
        resultTitleWin: "Yay!",
        resultExplanationWin: "You got it right. Accessible Rich Internet Applications is correct. Well done!",
        resultTitleLose: "Not quite!",
        resultExplanationLose: "The correct answer is Accessible Rich Internet Applications. Now you know!"
    },
    {
        id: "question3",
        currentStep: 3,
        questionTitle: "Question ",
        questionText: "What is the purpose of a 'skip to content' link?",
        options: ["To skip advertisements", "To skip the navigation", "To skip all images", "To skip to the footer"],
        correctAnswer: "B",
        resultTitleWin: "Well done!",
        resultExplanationWin: "That is the right choice. When you press a 'skip to content' link you want the user to skip the navigation.",
        resultTitleLose: "Oh no!",
        resultExplanationLose: "This is incorrect. When you press a 'skip to content' link you want the user to skip the navigation."
    }
];
//#endregion
