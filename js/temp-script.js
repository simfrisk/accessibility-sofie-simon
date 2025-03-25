const questionTitle = document.querySelector("#question-title")
const questionText = document.querySelector("#question-text")
const optionA = document.querySelector("#option-a")
const optionB = document.querySelector("#option-b")
const optionC = document.querySelector("#option-c")
const optionD = document.querySelector("#option-d")
const resaultTitle = document.querySelector("#resault-title")
const resaultExplanation = document.querySelector("#resault-explanation")
const submitAnswerBtn = document.querySelector("#answer-btn")
const nextQuestionBtn = document.querySelector("#next-question-btn")

let currentStep = 1


const loadNextQuestion = () => {
  // if current step = lenght of array
  nextStep()
  optionA.innerHTML = `A: ${questions[0].question}`
  optionB.innerHTML = `B: ${questions[1].question}`
  optionC.innerHTML = `C: ${questions[2].question}`
  optionD.innerHTML = `D: ${questions[3].question}`
  // else
  // Show resault slide
}

const loadNextAnswer = () => {
  // Next Slide
  // If correct ++ score
  // If incorrect -- score
  resaultTitle.innerHTML = (questions.resaultTitle)
  resaultExplanation.innerHTML = (questions.resaultExplanation)
  //Startover
  //Set user score === 0
  //Set current step === 0
}

const nextStep = () => {
  // Add the next object in the array
  // Clear Option A
  // Clear Option B
  // Clear Option C
  // Clear Option D
  // Next Slide


}


//eventlisteners
nextQuestionBtn.addEventListener("click", loadNextQuestion())