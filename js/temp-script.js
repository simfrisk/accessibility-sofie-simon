
// const loadNextAnswer = () => {



//! Next Slide
//! If correct ++ score
//! If incorrect dont add score
//! Save answer picked
// event.preventDefault()
// if (optionB === selected) {
//   console.log("Answer")
//   resultTitleWin.innerHTML = (currentQuestion.resultTitleWin)
//   resultExplanationWin.innerHTML = (currentQuestion.resultExplanationWin)
// } else if (optionA || optionC || optionD === selected) {
//   resultTitleLose.innerHTML = a(currentQuestion.resultTitle)
//   resultExplanationLose.innerHTML = (currentQuestion.resultExplanation)
// } else {
//   prompt("no choide was clicked")
// }

// }

// Select all elements with the class "options"
const options = document.querySelectorAll(".options");

// Loop through each element and add a change event listener
options.forEach(button => {
  button.addEventListener("change", (event) => {
    // Get the value of the changed element
    let userChoice = event.target.value;

    // Log the user choice to the console
    console.log(userChoice);
  });
});

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
// submitAnswerBtn.addEventListener("click", loadNextAnswer)

// goBackBtn.addEventListener("click", loadPrevoius)
// restartQuizBtn.addEventListener("click", startOver)
// const selectedOption = document.querySelector(`input[name="question1"]:checked`)

// console.log(selectedOption)

