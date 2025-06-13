const feedback = document.getElementById("feedback");
const submitBtn = document.getElementById("submit-answer");

function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector("input[name='quiz']:checked");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

submitBtn.addEventListener("click", checkAnswer);
