
//Global Variables
var questionsPane = $('#question').hide();
var answersPane = $('#answers').hide();
// console.log(answersPane);
var resultsPane = $('#results').hide();
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

    displayQuestion();    
};

// keep track of current question
function displayQuestion() {
    questionAnswered= false;

    questionsPane.append("<p>" + questions[currentQuestion].prompt + "</p>")
    console.log(answers);
    for(let i = 0; i < questions[currentQuestion].answers.length; i++) {
        answersPane.append(`<input type="radio" name="questions" value="` + i + `">` + questions[currentQuestion].answers[i]);
    }

    answersPane.click(function() {
        questions[currentQuestion].userAnswer = event.target.value;
        questionAnswered = true;
    })

    nextBtn.click(handleNextClick);
}

function handleNextClick() {
    currentQuestion++
    if (currentQuestion === questions.length) {
       displayResults(); 
    }
    else {
        currentQuestion++;
        displayQuestion();
    }
       
};

function displayResults(){
    let orderedList = $("<ol></ol>").appendTo(resultsPane);
    for(let i = 0; i < questions.length; i++){
        let questionResult = `<li><div>Correct Answer: ${questions[i].answers[questions[i].correctAnswerIndex]}</div><div>Your Answer: ${questions[i].answers[questions[i].userAnswer]}</div>`;

        if(questions[i].answers[questions[i].correctAnswerIndex] === questions[i].answers[questions[i].userAnswer]){
            questionResult += ` <div class="correct">You were correct!</div></li>`;
        }
        else {
            questionResult += ` <div class="wrong">You were wrong!</div>
                             </li>`;
        }
        orderedList.append(questionResult);
    }
    resultsPane.show();
}

