
//Global Variables
var questionsPane = $('#question').hide();
var answersPane = $('#answers').hide();
// console.log(answersPane);
var resultsPane = $('#resuls').hide();
var previousBtn = $('#previous-btn').hide();
var nextBtn = $('#next-btn').hide();
var currentQuestion = 0;

var reset;
var score = 0;

// QUESTIONS
let questions = [{
    prompt: "Which is not a Game of Thrones royal family name?",
    answers: ["Stark", "Tyrell", "Targaryen", "Baelish"],
    correctAnswerIndex: 3
  }];

const NUM_QUESTIONS = questions.length;


var buttonClick = $('#start-btn').click(function(){
    console.log("button was clicked")
    resetQuiz();
})

// keep track of current question

// update users score
function updateScore(){

};

// check for timeout
function setTimer(){

};

// START QUIZ LOAD
function resetQuiz(){
    // $("#start-btn").hide();
    questionsPane.show();
    answersPane.show();
    previousBtn.show();
    nextBtn.show();
    buttonClick.prop('value', 'Reset');
    currentQuestion = 0;

    displayQuestion();    
};

function displayQuestion() {
    questionsPane.append("<p>" + questions[currentQuestion].prompt + "</p>")
    console.log(answers);
    for(let i = 0; i < questions[currentQuestion].answers.length; i++) {
        answersPane.append(`<input type="radio" name="questions" value="` + questions[currentQuestion].answers[i] + `">`);
        // console.log("loops iteration", i);
        // answersPane.append("<p>Test</p>")
    }
}