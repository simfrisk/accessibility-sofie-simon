const startQuizBtn = document.querySelector("#start-quiz-btn")
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

let currentStep = 0

const loadNextQuestion = () => {
  console.log("testing")
  // if current step = lenght of array
  // nextStep()

  const currentQuestion = questions[currentStep]
  questionTitle.innerHTML = (currentQuestion.questionTitle)
  questionText.innerHTML = (currentQuestion.questionText)
  optionA.innerHTML = (`A: ${currentQuestion.options[0]}`)
  optionB.innerHTML = (`B: ${currentQuestion.options[1]}`)
  optionC.innerHTML = (`C: ${currentQuestion.options[2]}`)
  optionD.innerHTML = (`D: ${currentQuestion.options[3]}`)
  // else
  // Show result slide
}

//LoadNextAnser
// const loadNextAnswer = () => {
//   // Next Slide
//   // If correct ++ score
//   // If incorrect dont add score
//   resultTitle.innerHTML = (questions.resultTitle)
//   resultExplanation.innerHTML = (questions.resultExplanation)
// }

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
startQuizBtn.addEventListener("click", loadNextQuestion)
// nextQuestionBtn.addEventListener("click", loadNextQuestion)
// showAnswerBtn.addEventListener("click", loadNextAnswer)
// goBackBtn.addEventListener("click", loadPrevoius)
// restartQuizBtn.addEventListener("click", startOver)


