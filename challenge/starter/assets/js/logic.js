// make the questions array accessible to this logic script
var questions = window.myQuestions;
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

//add event listeners to listen for the 'click'
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', saveScore);

// add function to start the quiz
function startQuiz() {
hideStartScreen();
renderQuestion();
startTimer();
}

// add function to render a question
function renderQuestion() {
    var currentQuestion = myQuestions[questionIndex];

    //Display the title of the questions
    questionTitle.textContent = currentQuestion.question;

    choicesContainer.innerHTML = '';

    //Create a lopp through each of the options forming buttons for each to be available to click
     currentQuestion.options.forEach((option, index)) => {
        var optionButton = document.createElement('button');
        optionButton.textContent = option.text;
        optionButton.classList.add('choice-btn');
     }
}


//Log the array to the console
//console.log(questions);