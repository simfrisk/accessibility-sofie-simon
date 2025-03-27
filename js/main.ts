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
const startPage = document.querySelector("#start-page") as HTMLElement
const quizContainer = document.querySelector("#quiz-container") as HTMLElement
const resultContainer = document.querySelector("#result-container") as HTMLElement

let currentStep: number = -1
let userChoice: string = ""
let currentQuestion: any = null

//#endregion

//#region --- Object -----
const questions: Question[] = [
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
]

//#endregion

//#region --- Functions -----

//#region --- User Idetifier -----
const userChoiseIdentifier = (): void => {
  const options = document.querySelectorAll('input[name="question1"]') as NodeListOf<HTMLInputElement>
  options.forEach(button => {
    button.addEventListener("change", (event) => {
      userChoice = (event.target as HTMLInputElement).value;
      console.log(`User selected: ${userChoice} and correct is ${currentQuestion.correctAnswer}`)
    })
  })
}

userChoiseIdentifier()

//#endregion

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
  //! If last question go to resaults
  currentQuestion = questions[currentStep]
  questionTitle.innerHTML = (currentQuestion.questionTitle)
  questionText.innerHTML = (currentQuestion.questionText)
  optionA.innerHTML = (currentQuestion.options[0])
  optionB.innerHTML = (currentQuestion.options[1])
  optionC.innerHTML = (currentQuestion.options[2])
  optionD.innerHTML = (currentQuestion.options[3])

  quizContainer.style.display = ("block")
  quizContainer.style.transform = ("translateY(0dvh)")
  startPage.style.display = ("none")
  resultContainer.style.display = ("none")



  // else
  // Show result slide
}

//#endregion

//#region --- Load answer -----
const loadNextAnswer = (event: Event): void => {
  if (event) event.preventDefault()

  if (userChoice === currentQuestion.correctAnswer) {
    console.log("You are correct!")
    resultTitle.innerText = currentQuestion.resultTitleWin
    resultExplanation.innerText = currentQuestion.resultExplanationWin
    //! Add + 1 to score

  } else if (userChoice === "") {
    alert("Please select an answer.")

  } else {
    console.log("Sorry, wrong answer.")
    resultTitle.innerText = currentQuestion.resultTitleLose;
    resultExplanation.innerText = currentQuestion.resultExplanationLose
  }

  resultContainer.style.display = ("block")
  resultContainer.style.transform = ("translateY(0dvh)")
  quizContainer.style.display = ("none")
}
//#endregion

//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu)
startQuizBtn.addEventListener("click", loadNextQuestion)
submitAnswerBtn.addEventListener("click", loadNextAnswer)
nextQuestionBtn.addEventListener("click", loadNextQuestion)
//#endregion


//#endregion