let questions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        //Index     0       1       2       3
        answers: ["Paris", "London", "Berlin", "Hamburg"],
        correctAnswer: 2
    },
    {
        question: "Welche Farbe hat die Sonne?",
        //Index     0       1       2       3
        answers: ["Blau", "Gelb", "Lila", "Braun"],
        correctAnswer: 1
    },
    {
        question: "Was ist 12 x 12?",
        //Index     0       1       2       3
        answers: ["144", "122", "1212", "212"],
        correctAnswer: 0
    },
    {
        question: "Welcher ist der höchste Berg der Welt?",
        //Index     0            1                 2         3
        answers: ["Makalu", "Kangchenjun", "Mount Everest", "K2"],
        correctAnswer: 2
    },
    {
        question: "Welche Stadt hat die meisten Einwohner?",
        //Index     0       1       2       3
        answers: ["Berlin", "Tokio", "Shanghai", "Mexiko"],
        correctAnswer: 1
    },
    {
        question: "Für was steht die abkürzung HTML?",
        //Index     0       1       2       3
        answers: ["Hüper Text Markt Language", "Hypie Text Markup Language", "Hyper Text Markt Language", "Hyper Text Markup Language"],
        correctAnswer: 3
    },
    {
        question: "Für was steht CSS?",
        //Index     0       1       2       3
        answers: ["Cascading Style Sheets", "Casting Style Sheep", "Cascading Style Sheep", "Casting Steel Sharp"],
        correctAnswer: 0
    },
];
let score = 0; // Integer
let currentQuestionIndex = 0; // Bei welcher Frage man sich befindet.

function displayQuestion(){

    if(currentQuestionIndex >= questions.length){
        document.getElementById('quiz-container').style.display = 'none'; // Quiz container wird nicht mehr angezeigt(versteckt)
        document.getElementById('result').style.display = 'block';   // Ergebnis anzeigen 
        document.getElementById('score').textContent = score; // Score anzeigen (Punkte)
        return;
    }


    let question = questions[currentQuestionIndex];

    document.getElementById("question").textContent = question.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = ""; // HTML-Elements mit der ID "answersDiv" zu leeren. 

    question.answers.forEach((answer, index) => {
        let answersButton = document.createElement("button");
        answersButton.textContent = answer;
        answersButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answersButton);
    });
}

displayQuestion();

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score += 1;
    }
    
    nextQuestion();
}
function nextQuestion() {
    currentQuestionIndex += 1;
    displayQuestion();
}

