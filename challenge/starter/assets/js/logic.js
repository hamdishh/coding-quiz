// Import the questions array from questions.js
//import { myQuestions } from './questions.js';

// Assign the questions array to a property of the window object
window.myQuestions = myQuestions;

// Rest of your code
var questionIndex = 0;
var countDown;
var secsRemaining = 60;

//assign a variable targetting each html element that is relevant to the quizzes function
var startBtn = document.getElementById('start');
var questionTitle = document.getElementById('question-title');
var choicesContainer = document.getElementById('choices');
var endScreen = document.getElementById('end-screen');
var feedbackContainer = document.getElementById('feedback');
var timeEl = document.getElementById('time');
var finalScore = document.getElementById('final-score');
var inputInitials = document.getElementById('initials');
var submitBtn = document.getElementById('submit');
var startScreen = document.getElementById('start-screen');

//add event listeners to listen for the 'click'
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', saveScore);

//create function to hide the start screen
function hidestartScreen() {
    startScreen.style.display = 'none';
}

//variable to keep track of the score
var score = 0;

//define the startTimer function
function startTimer() {
console.log(("Timer has started!"));
}

//add function to ensure the scores will be saved
function saveScore(score) {
    //to ensure it is saved to local storage
    if(typeof(storage) !== 'undefined') {
        localStorage.setItem("userScore", score);
    //print to console
 console.log("Score saved:", score)
} else {
    console.log("Local storage is not supported, unable to save score.");
}
}
submitBtn.addEventListener('click', saveScore);

// add function to start the quiz
function startQuiz() {
hidestartScreen();
renderQuestion();
startTimer();
}
function renderQuestion() {
    var currentQuestion = myQuestions[questionIndex];

    // Display the title of the questions
    questionTitle.textContent = currentQuestion.question;

    choicesContainer.innerHTML = '';

    // Create a loop through each of the options forming buttons for each to be available to click
    currentQuestion.options.forEach((option, index) => {
        var optionButton = document.createElement('button');
        optionButton.textContent = option.text;
        optionButton.classList.add('choice-btn');
       //i had to google foo to modify my code as their was a syntax error with the word index so i added this console log i found in web docs
        console.log(`Option ${index + 1}: ${option.text}`);
    

        // add an event listener to check if the clicked option is correct
        optionButton.addEventListener('click', function () {
            if (option.correct) {
                // result of getting the correct answer increases score,
                score++;
            } else {
                // Result of getting an incorrect answer leads to consequence i.e deducting time
                secsRemaining -= 10;
            }
            // After the event, move to the next question
            renderQuestion();
        });

        // Append the created optionButton to the choicesContainer
        choicesContainer.appendChild(optionButton);
    });
}




//Log the array to the console
//console.log(questions);