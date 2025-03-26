//#region --- Interface ----- 
interface Question {
  id: string,
  currentStep: number,
  questionTitle: string,
  questionText: string,
  options: string[],
  correctAnswer: string,
  resultTitle: string,
  resultExplanation: string
}
//#endregion

//#region --- DOM Elements ----- 
const navLinks = document.querySelector("#nav-links") as HTMLElement
const menuIcon = document.querySelector("#menu-icon") as HTMLElement

//#endregion

//#region --- Object -----
const questions: Question[] = [
  {
    id: "question1",
    currentStep: 1,
    questionTitle: "Question 1",
    questionText: "What is ...",
    options: ["option A", "option B", "option C", "option D"],
    correctAnswer: "option 1",
    resultTitle: "answerTitle",
    resultExplanation: "answerExplanation"
  },
  {
    id: "question2",
    questionTitle: "Question 1",
    questionText: "What is ...",
    currentStep: 2,
    options: ["option A", "option B", "option C", "option D"],
    correctAnswer: "option 1",
    resultTitle: "answerTitle",
    resultExplanation: "answerExplanation"
  },
  {
    id: "question3",
    currentStep: 3,
    questionTitle: "Question 1",
    questionText: "What is ...",
    options: ["option A", "option B", "option C", "option D"],
    correctAnswer: "option 1",
    resultTitle: "answerTitle",
    resultExplanation: "answerExplanation"
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
