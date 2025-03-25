//#region --- Interface ----- 
interface questions {
  id: string,
  currentStep: number,
  question: string,
  options: string[],
  correctAnswer: string,
  resaultTitle: string,
  resaultExplanation: string
}
//#endregion

//#region --- DOM Elements ----- 
const navLinks = document.querySelector("#nav-links") as HTMLElement
const menuIcon = document.querySelector("#menu-icon") as HTMLElement

//#endregion

//#region --- Object -----
const questions = [
  {
    id: "question1",
    currentStep: 1,
    question: "What is ...",
    options: ["option A", "option B", "option C", "option D"],
    correctAnswer: "option 1",
    resaultTitle: "answerTitle",
    resaultExplanation: "answerExplanation"
  },
  {
    id: "question2",
    question: "What is ...",
    currentStep: 2,
    options: ["option A", "option B", "option C", "option D"],
    correctAnswer: "option 1",
    resaultTitle: "answerTitle",
    resaultExplanation: "answerExplanation"
  },
  {
    id: "question3",
    currentStep: 3,
    question: "What is ...",
    options: ["option A", "option B", "option C", "option D"],
    correctAnswer: "option 1",
    resaultTitle: "answerTitle",
    resaultExplanation: "answerExplanation"
  }
]

//#endregion

//#region --- Functions -----

//#region --- Burger Menu -----
const burgerMenu = (): void => {
  navLinks.classList.toggle("active")
  menuIcon.classList.toggle("fa-bars")
  menuIcon.classList.toggle("fa-times")
}
//#endregion

//#endregion

//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu)

//#endregion
