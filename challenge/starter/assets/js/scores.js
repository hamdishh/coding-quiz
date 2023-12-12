function saveScore(score) {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem("userScore", score);
        console.log("Score saved:", score);
    } else {
        console.log("Local storage is not supported, unable to save score.");
    }   
}

//function to retrieve the saved score from local storage
function getSavedScore() {
    if (typeof localStorage !== "undefined") {
        return localStorage.getItem("userScore") || 0;
    } else {
        console.log("Local storage is not supported, unable to retrieve score.");
        return 0;
    }

    }

    //create a function to display the final score
    function displayFinalScore() {
        var finalScoreElement = document.getElementById('final-score');
        var savedScore = get savedScore();
        finalScoreElement.textContent = "Your final score " + savedScore;

        //export the functions so they can be used in other scripts
        export { saveScore, getSavedScore, displayFinalScore };
    }