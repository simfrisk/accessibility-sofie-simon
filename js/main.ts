//#region --- Interface ----- 
interface Question {
  id: string,
  currentStep: number,
  questionTitle: string,
  questionText: string,
  options: string[],
  correctAnswer: string,
  resultTitleWin: string,
  resultExplanationWin: string
  resultTitleLose: string,
  resultExplanationLose: string
}
//#endregion

//#region --- DOM Elements ----- 
const navLinks = document.querySelector("#nav-links") as HTMLElement
const menuIcon = document.querySelector("#menu-icon") as HTMLElement
const startQuizBtn = document.querySelector("#start-quiz-btn") as HTMLElement
const questionTitle = document.querySelector("#question-title") as HTMLElement
const questionText = document.querySelector("#question-text") as HTMLParagraphElement
// const optionA2 = document.querySelector('label[for="question1"]')
const optionA = document.querySelector('label[for="option-a"]') as HTMLLabelElement
const optionB = document.querySelector('label[for="option-b"]') as HTMLLabelElement
const optionC = document.querySelector('label[for="option-c"]') as HTMLLabelElement
const optionD = document.querySelector('label[for="option-d"]') as HTMLLabelElement
const resultTitle = document.querySelector("#result-title") as HTMLElement
const resultExplanation = document.querySelector("#result-explanation") as HTMLParagraphElement
const submitAnswerBtn = document.querySelector("#answer-btn") as HTMLElement
const nextQuestionBtn = document.querySelector("#next-question-btn") as HTMLElement

let currentStep: number = -1
let currentQuestion = null

//#endregion

//#region --- Object -----
const questions: Question[] = [
  {
    id: "question1",
    currentStep: 1,
    questionTitle: "Question 1",
    questionText: "What is a screen reader?",
    options: ["A car", "A digital text reader", "A cat", "A fruite"],
    correctAnswer: "A digital text reader",
    resultTitleWin: "Congratulations",
    resultExplanationWin: "You got it right!",
    resultTitleLose: "Oh no!",
    resultExplanationLose: "You got it wrong"
  },
  {
    id: "question2",
    questionTitle: "Question 2",
    questionText: "What is ...2",
    currentStep: 2,
    options: ["option A", "option B", "option C", "option D"],
    correctAnswer: "option 1",
    resultTitleWin: "answerTitle",
    resultExplanationWin: "answerExplanation",
    resultTitleLose: "Oh no!",
    resultExplanationLose: "You got it wrong"
  },
  {
    id: "question3",
    currentStep: 3,
    questionTitle: "Question 3",
    questionText: "What is ...3",
    options: ["option A", "option B", "option C", "option D"],
    correctAnswer: "option 1",
    resultTitleWin: "answerTitle",
    resultExplanationWin: "answerExplanation",
    resultTitleLose: "Oh no!",
    resultExplanationLose: "You got it wrong"
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

//#region --- Load Next Question -----
const loadNextQuestion = () => {
  console.log("testing")
  // nextStep()
  currentStep++
  currentQuestion = questions[currentStep]
  questionTitle.innerHTML = (currentQuestion.questionTitle)
  questionText.innerHTML = (currentQuestion.questionText)
  optionA.innerHTML = (`A: ${currentQuestion.options[0]}`)
  optionB.innerHTML = (`B: ${currentQuestion.options[1]}`)
  optionC.innerHTML = (`C: ${currentQuestion.options[2]}`)
  optionD.innerHTML = (`D: ${currentQuestion.options[3]}`)
  // else
  // Show result slide
}

//#endregion

//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu)
startQuizBtn.addEventListener("click", loadNextQuestion)
nextQuestionBtn.addEventListener("click", loadNextQuestion)

//#endregion
