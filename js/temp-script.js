


const userChoiseIdentifier = () => {
  const options = document.querySelectorAll('input[name="question1"]')
  options.forEach(button => {
    button.addEventListener("change", (event) => {
      userChoice = event.target.value
      console.log(`User selected: ${userChoice} and correct is ${currentQuestion.correctAnswer}`)
    })
  })
}

userChoiseIdentifier()

// const loadNextAnswer = (event) => {
//   if (event) event.preventDefault()

//   if (userChoice === currentQuestion.correctAnswer) {
//     console.log("You are correct!");
//     resultTitle.innerText = currentQuestion.resultTitleWin;
//     resultExplanation.innerText = currentQuestion.resultExplanationWin

//   } else if (userChoice === "") {
//     alert("Please select an answer.")

//   } else {
//     console.log("Sorry, wrong answer.")
//     resultTitle.innerText = currentQuestion.resultTitleLose;
//     resultExplanation.innerText = currentQuestion.resultExplanationLose
//   }
// }

// submitAnswerBtn.addEventListener("click", loadNextAnswer)


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


// goBackBtn.addEventListener("click", loadPrevoius)
// restartQuizBtn.addEventListener("click", startOver)

// console.log(selectedOption)

