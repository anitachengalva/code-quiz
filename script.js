// declare variables
var start = document.getElementById("start");
start.onclick = startQuiz;
// var done = document.getElementById("done");
// done.onclick = submitScore;
var finalScore = document.getElementById("finalScore");

let score = 0;
let clock = 101;

var timer = document.getElementById("timer");
var message = document.getElementById("message");
var scoreList = document.getElementById("scoreList");

var questionBox = document.getElementById("questionBox")
var questionTitle = document.getElementById("questionTitle");
var questionResult = document.getElementById("questionResult");
var choices = document.getElementById("choices");
var currentQ;
var currentQindex = 0;

// array of answer options per quiz question
var questions = [
    {
        title: "What does CSS stand for?",
        choice: [
            "Creative Styling Service","Cascading Style Sheets","Cascaded Styling Sheet","Case Sensitive Search"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        title: "What is the difference between a Class and ID?",
        choice: [
            "Classes are used to identify one single element in the HTML","ID's are used to identify more than one HTML element","ID's are used to identify one single element in the HTML","Both of these selectors are interchangable"
        ],
        answer: "ID's are used to identify one single element in the HTML"
    },
    {
        title: "Which of the following is not a reserved word in Javascript?",
        choice: [
            "throw","default","undefined","finally"
        ],
        answer: "undefined"
    },
    {
        title: "What does HTML stand for?",
        choice: [
            "Hyper Text Markdown Language","Hyper Text Markup Language","Hyper Tool Markup Language","Hyper Tool Markdown Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        title: "How can you open a link in a new browser? <a href='url' target='_______'",
        choice: [
            "_blank","_tab","_new","_parent"
        ],
        answer: "_blank"
    },
    {
        title: "Inside which HTML element is Javascript placed?",
        choice: [
            "<script>","<scripting>","<js>","<javascript>"
        ],
        answer: "<script>"
    },
    {
        title: "What is the correct way to define an picture in HTML?",
        choice: [
            "<pic>","<picture>","<image>","<img>"
        ],
        answer: "<img>"
    },
    {
        title: "How many header tags exist in HTML?",
        choice: [
            "<h1>-<h9>","<h1>-<h6>","<h1>-<h12>","They are unlimited"
        ],
        answer: "<h1>-<h6>"
    },
    {
        title: "What was Javascript originally named?",
        choice: [
            "Java","Latte","Mocha","Brew"
        ],
        answer: "Mocha"
    },
    {
        title: "What is the difference between padding and margin in CSS?",
        choice: [
            "Margin is the space around an element's border","Padding is the space around an element's border","Margin is the space between an element's border and content","Both padding and margin are the space between an element's border and content"
        ],
        answer: "Margin is the space around an element's border"
    },
];

function showQ() {
    currentQ = questions[currentQindex];
    questionTitle.textContent = currentQ.title;
    choices.innerHTML = "";

    // for loop - going through every question object
    for (var i = 0; i < currentQ.choice.length; i++) {
        var choiceButton = Object.assign(document.createElement("button"),{id:"ansBtns"});
        choiceButton.textContent = i + 1 + ". " + currentQ.choice[i];
        choices.appendChild(choiceButton);
    }
};

function setTimer() {
    var timeInterval = setInterval(function () {
        clock--;
        timer.textContent = clock + " SECONDS";
        if (clock <= 0) {
            clearInterval(timeInterval);
            end();
        }
    }, 1000);
};


// checks if chosen answer is correct
// adds to user's score if it is
choices.addEventListener("click", function(event) {
    var chosenAns = event.target;
    if (chosenAns.matches("#start") === false) {
        var result;
        if (
            chosenAns.textContent.substring(3) === questions[currentQindex].answer
        ) {
            score = score + 1;
            result = "CORRECT +1 POINT";
        } else {
            clock = clock - 30;
            result = "INCORRECT -30 SEC";
        }
        questionResult.innerHTML = result;
        currentQindex++;
        if (currentQindex === questions.length) {
            end();
        } else {
            showQ();
        }
    }
});

function startQuiz() {
    setTimer();
    // hides start button
    start.setAttribute("hidden", "true");
    // shows timer
    timer.removeAttribute("hidden");
    // gets quiz questions to display
    showQ();
};

function end() {
    // hides questions
    document.getElementById("ansBtns").setAttribute("hidden", "true");
    // shows SUBMIT button
    done.removeAttribute("hidden");
    // changes text to end screen
    questionResult.textContent = "GAME OVER - Would you like to submit your score?";
};