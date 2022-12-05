var highScoresArray = JSON.parse(localStorage.getItem("highScores")) || [];
// Sorts array so highest score is first
highScoresArray.sort((a, b) => {
    return b.totalScore - a.totalScore;
});
// Function for creating and populating high score scoreTable.
function scoreTable() {
    for (i = 0; i < highScoresArray.length; i++) {

        var listScoreEntry = document.createElement("li");
        listScoreEntry.textContent = highScoresArray[i].initials + "  " + highScoresArray[i].totalScore;
        document.getElementById("highscores").appendChild(listScoreEntry);


    }
}
scoreTable()
// function clearScore() {
//     localStorage.removeItem("highScores");
// }

// getElementById("clear").addEventListener("click", clearScore);

