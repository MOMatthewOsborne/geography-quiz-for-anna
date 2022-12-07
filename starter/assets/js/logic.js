var secsRemaining = 90;
var timeDisplay = document.getElementById("time");
var questionDisplay = document.getElementById("question-title")
var answersDisplay = document.getElementById("choices")
var startScreen = document.getElementById("start-screen")
var questionsDiv = document.getElementById("questions")
var answersDiv = document.getElementById("choices")
var questionNumber = 0;
var feedback = document.getElementById("feedback")
var endscreen = document.getElementById("end-screen")
var score = 0;
var totalScore;
var highScoresArray = JSON.parse(localStorage.getItem("highScores")) || [];



// timer
function quizTimer() {
    var timer = setInterval(function () {
        secsRemaining--;
        timeDisplay.textContent = secsRemaining + ' seconds remaining';
        if (secsRemaining < 0) {
            clearInterval(timer);
            endGame()
        }

    }, 1000)
}

document.getElementById("start").addEventListener("click", startQuiz)


// starts quiz

function startQuiz() {

    quizTimer();
    startScreen.style.display = "none"
    questionsDiv.removeAttribute("class")
    feedback.removeAttribute("class")
    // answersDiv.createElement("button")
    displayQuestion()
}
// Displays questions. Gives feedback on whether corrct or incorrect. Ends game when questions are finished.

function displayQuestion() {

    var question = questions[questionNumber].Question;
    questionDisplay.textContent = question;
    answersDiv.innerHTML = " "
    questions[questionNumber].Answers.forEach(answer => {
        var button = document.createElement('button')
        button.textContent = answer;
        button.setAttribute("value", answer)
        button.addEventListener("click", function () {
            if (this.value === questions[questionNumber].Correct) {
                score++;
                feedback.innerText = "Correct";
            } else {
                secsRemaining -= 10;
                feedback.innerText = "Incorrect";
            }
            questionNumber++;
            if (questionNumber === questions.length) {
                endGame();
            } else {
                displayQuestion()
            }

        })
        answersDiv.appendChild(button);
    });


}
// End game function Takes score and saves it along with initials. Creates object and saves to local storage as string.

function endGame() {
    questionsDiv.setAttribute("class", "hide")
    feedback.setAttribute("class", "hide")

    endscreen.classList.remove("hide")
    totalScore = score * secsRemaining;
    document.getElementById("final-score").textContent = totalScore;
}
document.getElementById("submit").addEventListener("click", function () {
    var initials = document.getElementById("initials").value
    var scoreObj = { initials, totalScore };
    console.log(scoreObj)
    highScoresArray.push(scoreObj)
    localStorage.setItem("highScores", JSON.stringify(highScoresArray))
    window.location.href = "starter/highscores.html";

})






