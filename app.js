
//Global Variables
var questionsPane = $('#question').hide();
var answersPane = $('#answers').hide();
// console.log(answersPane);
var resultsPane = $('#resuls').hide();
var previousBtn = $('#previous-btn').hide();
var nextBtn = $('#next-btn').hide();
var currentQuestion = 0;
var questionAnswered = false;
var reset;
var score = 0;

// QUESTIONS
let questions = [{
    prompt: "Which is not a Game of Thrones royal family name?",
    answers: ["Stark", "Tyrell", "Targaryen", "Baelish"],
    correctAnswerIndex: 3, 
    userAnswer: -1
}, {
    prompt: "Ayra's fighting style is called?",
    answers: ["Wolf Wield", "Water Dancing", "Stinger", "Slashing Steel"],
    correctAnswerIndex: 1, 
    userAnswer: -1
}, {
    prompt: "Sandor Clegane is known as ...",
    answers: ["The Beast", "The Kingslayer", "The Mountain", "The Hound"],
    correctAnswerIndex: 3, 
    userAnswer: -1
}, {
    prompt: "Bran Stark is paralyzed following a fall, who pushed him?",
    answers: ["Tryon Lannister", "Jaime Lannister", "Cersei Lannister", "Joffrey Baratheon"],
    correctAnswerIndex: 1, 
    userAnswer: -1
}, {
    prompt: "According to Bran, \"chaos is ...\"",
    answers: ["a staircase", "a ladder", "Inevitable", "a way of life"],
    correctAnswerIndex: 1, 
    userAnswer: -1
  }];

const NUM_QUESTIONS = questions.length;


var buttonClick = $('#start-btn').click(function(){
    console.log("button was clicked")
    resetQuiz();
})

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

    nextBtn.click(handleNextClick);
    displayQuestion();    
};

// keep track of current question
function displayQuestion() {
    questionAnswered= false;
    questionsPane.empty();
    answersPane.empty();

    questionsPane.append("<p>" + questions[currentQuestion].prompt + "</p>")
    console.log(answers);
    for(let i = 0; i < questions[currentQuestion].answers.length; i++) {
        answersPane.append(`<input type="radio" name="questions" value="` + i + `">` + questions[currentQuestion].answers[i]);
    }

    answersPane.click(function() {
        questions[currentQuestion].userAnswer = event.target.value;
        questionAnswered = true;
        console.log("use answer;", questions[currentQuestion].userAnswer);
    })

    
}

function handleNextClick() {
    if (questionAnswered) {
        currentQuestion++;
        if (currentQuestion > 4) {

            displayResults();

        } else {
            currentQuestion++;
            displayQuestion();
            
        }      
    }
};

function displayResults() {
    console.log("We got to the end");
}