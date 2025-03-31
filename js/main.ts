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
const selectionForm = document.querySelector("#selection-from") as HTMLFormElement
const radioButtonGroup = document.querySelector(".radio-button-group") as HTMLDivElement
const radioButtonCheck = document.querySelectorAll('input[name="question1"]') as NodeListOf<HTMLInputElement>
const backBtn = document.querySelector("#back-btn") as HTMLButtonElement
const theBody = document.querySelector("body") as HTMLBodyElement
const darkmodetoggle = document.querySelector("#dark-mode-icon") as HTMLButtonElement
const darkModeContainer = document.querySelector("#dark-mode-container") as HTMLButtonElement
const answerBtnContainer = document.querySelector("#answer-btn-container") as HTMLButtonElement


let currentStep: number = -1
let userChoice: string = ""
let currentQuestion: any = null
let score: number = 0

//#endregion

//#region --- Functions -----

//#region --- User Idetifier -----
const userChoiseIdentifier = (): void => {
  const options = document.querySelectorAll('input[name="question1"]') as NodeListOf<HTMLInputElement>
  options.forEach(button => {
    button.addEventListener("change", (event) => {
      userChoice = (event.target as HTMLInputElement).value
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
  currentStep++
  radioButtonCheck.forEach((radio): void => {
    radio.checked = false
  });

  console.log(currentStep);

  if (currentStep >= questions.length) {
    quizResultTitle.innerHTML = "Quiz is over"
    quizResultText.innerHTML = `Your score is: ${score} / ${questions.length}`
    transition(resultContainer, quizResult, null)
  } else {
    currentQuestion = questions[currentStep]
    questionTitle.innerHTML = (`Question ${currentStep + 1}/${questions.length}`)
    questionText.innerHTML = (currentQuestion.questionText)
    optionA.innerHTML = (currentQuestion.options[0])
    optionB.innerHTML = (currentQuestion.options[1])
    optionC.innerHTML = (currentQuestion.options[2])
    optionD.innerHTML = (currentQuestion.options[3])

    transition(resultContainer, quizContainer, startPage)
  }
}

//#endregion

//#region --- Load answer -----
const loadNextAnswer = (event: Event): void => {
  if (event) event.preventDefault()

  if (userChoice === "") {
    alert("Please select an answer.");
    return;  // <-- Stop execution if no option is selected
  }

  if (userChoice === currentQuestion.correctAnswer) {
    console.log("You are correct!")
    resultTitle.innerHTML = currentQuestion.resultTitleWin
    resultExplanation.innerHTML = currentQuestion.resultExplanationWin
    score++
    console.log(score)
  } else {
    console.log("Sorry, wrong answer.")
    resultTitle.innerHTML = currentQuestion.resultTitleLose
    resultExplanation.innerHTML = currentQuestion.resultExplanationLose
  }

  transition(quizContainer, resultContainer, null)

  if (currentStep % questions.length === questions.length - 1) {
    nextQuestionBtn.innerHTML = "SEE RESULTS"
  }
}
//#endregion

//#region --- Start over ----
const startAgain = (): void => {
  nextQuestionBtn.innerHTML = "NEXT QUESTION"
  currentStep = -1
  score = 0
  transition(quizResult, startPage, null)
}

//#endregion

//#region --- Keyboard Navigation ----
const handleKeyEvent = (event: KeyboardEvent, button: HTMLElement, menuIcon: HTMLElement, darkModeContainer: HTMLElement): void => {
  switch (event.key) {
    case "Enter":
      if (document.activeElement !== button && document.activeElement !== menuIcon && document.activeElement !== darkmodetoggle && document.activeElement !== optionA && document.activeElement !== optionB && document.activeElement !== optionC && document.activeElement !== optionD && document.activeElement !== answerBtnContainer) {
        event.preventDefault()
        button.focus()
      } else if (document.activeElement === button) {
        button.click()
      } else if (document.activeElement === menuIcon) {
        menuIcon.click()
      } else if (document.activeElement === darkModeContainer) {
        darkmode()
      } else if (document.activeElement === optionA) {
        optionA.click()
      } else if (document.activeElement === optionB) {
        optionB.click()
      } else if (document.activeElement === optionC) {
        optionC.click()
      } else if (document.activeElement === optionD) {
        optionD.click()
      } else if (document.activeElement === answerBtnContainer) {
        loadNextAnswer()
        setTimeout(() => {
          resultTitle.focus()
        }, 700)
      }
      break

    case "Escape":
      if (document.activeElement !== button && document.activeElement !== menuIcon && document.activeElement !== darkmodetoggle && document.activeElement !== optionA && document.activeElement !== optionB && document.activeElement !== optionC && document.activeElement !== optionD && document.activeElement !== answerBtnContainer) {
        event.preventDefault()
      }
      else {
        event.preventDefault()
        optionA.focus()
      }
      break

    case "ArrowDown":
      if (document.activeElement === optionD) {
        event.preventDefault()
        answerBtnContainer.focus()
        console.log("keydown")
      }
  }
}

const enterKeySelect = (event: KeyboardEvent): void => {
  handleKeyEvent(event, startQuizBtn, menuIcon, darkModeContainer)
  handleKeyEvent(event, nextQuestionBtn, menuIcon, darkModeContainer)
  handleKeyEvent(event, startAgainBtn, menuIcon, darkModeContainer)
}


//#endregion

//#region --- transition ----

const transition = (
  hideElement: HTMLElement | null,
  showElement: HTMLElement | null,
  hideElementExtra: HTMLElement | null
): void => {

  const mediaQuery = window.matchMedia("(min-width: 768px)")

  if (mediaQuery.matches) {
    hideElement.style.zIndex = ("0")
    showElement.style.zIndex = ("1")
    showElement.classList.remove("hide")
    showElement.classList.remove("offset")
    hideElement.classList.add("hide")
    hideElement.classList.add("offset")
    if (hideElementExtra)
      hideElementExtra.classList.add("hide")
    hideElementExtra.classList.add("offset")

  } else {
    hideElement.style.zIndex = ("0")
    showElement.style.zIndex = ("1")
    showElement.classList.remove("hide")
    requestAnimationFrame(() => {
      showElement.classList.remove("offset")
    })
    setTimeout(() => {
      hideElement.classList.add("hide")
      hideElement.classList.add("offset")
      if (hideElementExtra)
        hideElementExtra.classList.add("hide")
      hideElementExtra.classList.add("offset")
    }, 700
    )
  }
}



//#endregion

//#region --- Dark mode ----


if (localStorage.getItem("dark-mode") === "enabled") {
  theBody.classList.add("dark-mode");
}

const darkmode = () => {
  console.log("pressed")
  if (theBody.classList.contains("dark-mode")) {
    theBody.classList.remove("dark-mode")
    localStorage.setItem("dark-mode", "disabled")
  } else {
    theBody.classList.add("dark-mode")
    localStorage.setItem("dark-mode", "enabled")
  }
}

//#endrigion

//#endregion

//#endregion

//#region --- Event listeners -----
menuIcon.addEventListener("click", burgerMenu)
startQuizBtn.addEventListener("click", loadNextQuestion)
submitAnswerBtn.addEventListener("click", loadNextAnswer)
nextQuestionBtn.addEventListener("click", loadNextQuestion)
startAgainBtn.addEventListener("click", startAgain)
darkmodetoggle.addEventListener("click", darkmode)
document.addEventListener("keydown", enterKeySelect);



//#endregion

