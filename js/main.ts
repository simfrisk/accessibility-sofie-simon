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
const quizResult = document.querySelector("#quiz-result") as HTMLElement
const quizResultTitle = document.querySelector("#quiz-result-title") as HTMLElement
const quizResultText = document.querySelector("#quiz-result-text") as HTMLParagraphElement
const startAgainBtn = document.querySelector("#start-again-btn") as HTMLButtonElement


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
  userChoice = ""
  // nextStep()
  currentStep++
  if (currentStep >= questions.length) {

    quizResultTitle.innerHTML = "Quiz is over"
    quizResultText.innerHTML = "You'r score is..."
    quizResult.style.display = ("block")
    quizResult.style.transform = ("translateY(0dvh)")
    resultContainer.style.display = ("none")

  } else {
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
  }
}

//#endregion

//#region --- Load answer -----
const loadNextAnswer = (event: Event): void => {
  if (event) event.preventDefault()

  if (currentStep < questions.length) {
    if (userChoice === currentQuestion.correctAnswer) {
      console.log("You are correct!");
      resultTitle.innerHTML = currentQuestion.resultTitleWin;
      resultExplanation.innerHTML = currentQuestion.resultExplanationWin;
    } else if (userChoice === "") {
      alert("Please select an answer.");
    } else {
      console.log("Sorry, wrong answer.");
      resultTitle.innerHTML = currentQuestion.resultTitleLose;
      resultExplanation.innerHTML = currentQuestion.resultExplanationLose;
    }

  } else {
    nextQuestionBtn.innerHTML = "test"
    console.log("Button text changed to 'test'");
  }
  resultContainer.style.display = "block";
  resultContainer.style.transform = "translateY(0dvh)";
  quizContainer.style.display = "none";
}
//#endregion

//#region --- Start over ----
const startAgain = (): void => {
  startPage.style.display = ("block")
  startPage.style.transform = ("translateY(0dvh)")
  quizResult.style.display = ("none")
  currentStep = -1

}

//#endregion

//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu)
startQuizBtn.addEventListener("click", loadNextQuestion)
submitAnswerBtn.addEventListener("click", loadNextAnswer)
nextQuestionBtn.addEventListener("click", loadNextQuestion)
startAgainBtn.addEventListener("click", startAgain)
//#endregion


//#endregion