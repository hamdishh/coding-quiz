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
//Log the array to the console
//console.log(questions);