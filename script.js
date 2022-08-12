// declare variables
var start = document.getElementById("#start");
start.onclick = startQuiz;
var end = document.getElementById("#end");
var finalScore = document.getElementById("#finalScore");

let i = 0;
let score = 0;
let clock = 99;

var timer = document.getElementById("#timer");
var message = document.getElementById("#message");
var scoreList = document.getElementById("#scoreList");

var question = document.getElementById("#question");
var choices = document.getElementById("#choices");

// array of answer options per quiz question
var questions = [
    {
        title: "What does CSS stand for?",
        choices: [
            "Creative Styling Service","Cascading Style Sheets","Cascaded Styling Sheet","Case Sensitive Search"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        title: "What is the difference between a Class and ID?",
        choices: [
            "Classes are used to identify one single element in the HTML","ID's are used to identify more than one HTML element","ID's are used to identify one single element in the HTML","Both of these selectors are interchangable"
        ],
        answer: "ID's are used to identify one single element in the HTML"
    },
    {
        title: "Which of the following is not a reserved word in Javascript?",
        choices: [
            "throw","default","undefined","finally"
        ],
        answer: "undefined"
    },
    {
        title: "What does HTML stand for?",
        choices: [
            "Hyper Text Markdown Language","Hyper Text Markup Language","Hyper Tool Markup Language","Hyper Tool Markdown Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        title: "How can you open a link in a new browser? <a href='url' target='_______'",
        choices: [
            "_blank","_tab","_new","_parent"
        ],
        answer: "_blank"
    },
    {
        title: "Inside which HTML element is Javascript placed?",
        choices: [
            "<script>","<scripting>","<js>","<javascript>"
        ],
        answer: "<script>"
    },
    {
        title: "What is the correct way to define an picture in HTML?",
        choices: [
            "<pic>","<picture>","<image>","<img>"
        ],
        answer: "<img>"
    },
    {
        title: "How many header tags exist in HTML?",
        choices: [
            "<h1>-<h9>","<h1>-<h6>","<h1>-<h12>","They are unlimited"
        ],
        answer: "<h1>-<h6>"
    },
    {
        title: "What was Javascript originally named?",
        choices: [
            "Java","Latte","Mocha","Brew"
        ],
        answer: "Mocha"
    },
    {
        title: "What is the difference between padding and margin in CSS?",
        choices: [
            "Margin is the space around an element's border","Padding is the space around an element's border","Margin is the space between an element's border and content","Both padding and margin are the space between an element's border and content"
        ],
        answer: "Margin is the space around an element's border"
    },
];

