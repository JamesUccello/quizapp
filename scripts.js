// scripts.js
const questions = [
    { 
        question: "What is the capital of France?", 
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    { 
        question: "What is the largest planet in our solar system?", 
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Jupiter"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    displayQuestion(currentQuestionIndex);
});

function displayQuestion(index) {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = "";

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.style.display = 'block';

    const questionTitle = document.createElement('p');
    questionTitle.textContent = `${index + 1}. ${questions[index].question}`;
    questionDiv.appendChild(questionTitle);

    questions[index].options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="q${index}" value="${option}"> ${option}`;
        questionDiv.appendChild(label);
    });

    quizDiv.appendChild(questionDiv);
}

function changeQuestion(step) {
    currentQuestionIndex += step;

    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    } else if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = questions.length - 1;
    }

    displayQuestion(currentQuestionIndex);
}

function submitQuiz() {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        
        if (selectedOption && selectedOption.value === question.correct) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${questions.length}`);
}
