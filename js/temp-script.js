const questionTitle = document.querySelector("#question-title")
const questionText = document.querySelector("#question-text")
const optionA = document.querySelector("#option-a")
const optionB = document.querySelector("#option-b")
const optionC = document.querySelector("#option-c")
const optionD = document.querySelector("#option-d")
const resultTitle = document.querySelector("#result-title")
const resultExplanation = document.querySelector("#result-explanation")
const submitAnswerBtn = document.querySelector("#answer-btn")
const nextQuestionBtn = document.querySelector("#next-question-btn")

let currentStep = 1

const loadNextQuestion = () => {
  // if current step = lenght of array
  nextStep()
  questionTitle.innerHTML = questions.questionsTitle
  questionText.innerHTML = questions.questionsText
  optionA.innerHTML = `A: ${questions.options[0]}`
  optionB.innerHTML = `B: ${questions.options[0]}`
  optionC.innerHTML = `C: ${questions.options[0]}`
  optionD.innerHTML = `D: ${questions.options[0]}`
  // else
  // Show result slide
}


const loadNextAnswer = () => {
  // Next Slide
  // If correct ++ score
  // If incorrect dont add score
  resultTitle.innerHTML = (questions.resultTitle)
  resultExplanation.innerHTML = (questions.resaultExplanation)

}

// const loadPrevoius = () => {
//   //Startover
//   //Set user score === 0
//   //Set current step === 0
// }

// const startOver = () => {
//   //Startover
//   //Set user score === 0
//   //Set current step === 0
// }

// const nextStep = () => {
//   // Add the next object in the array
//   // Clear Option A
//   // Clear Option B
//   // Clear Option C
//   // Clear Option D
//   // Next Slide
// }

// const score = () => {
//   // Add the next object in the array
//   // Clear Option A
//   // Clear Option B
//   // Clear Option C
//   // Clear Option D
//   // Next Slide
// }


//eventlisteners
// startQuizBtn.addEventListener("click", loadNextQuestion())
nextQuestionBtn.addEventListener("click", loadNextQuestion())
// showAnswerBtn.addEventListener("click", loadNextAnswer())
// goBackBtn.addEventListener("click", loadPrevoius())
// restartQuizBtn.addEventListener("click", startOver())


