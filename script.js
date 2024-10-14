const apiUrl = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple';
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let selectedAnswer = '';

document.addEventListener('DOMContentLoaded', () => {
    fetchQuestions();
});

async function fetchQuestions() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        questions = data.results;
        showQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');

    questionElement.innerHTML = decodeHTML(question.question);

    const allOptions = [...question.incorrect_answers, question.correct_answer];
    allOptions.sort(() => Math.random() - 0.5); 

    optionsElement.innerHTML = '';
    allOptions.forEach(option => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'option';
        checkbox.value = option;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(decodeHTML(option)));
        optionsElement.appendChild(label);
        label.addEventListener('click', () => handleAnswer(checkbox));
    });

    nextButton.style.display = 'none';
}

function handleAnswer(checkbox) {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(cb => {
        cb.disabled = true;
    });

    const question = questions[currentQuestionIndex];
    const nextButton = document.getElementById('next-btn');
    const selectedOption = checkbox.value;

    if (selectedOption === question.correct_answer) {
        checkbox.parentNode.classList.add('correct');
        score++;
    } else {
        checkbox.parentNode.classList.add('wrong');
        highlightCorrectAnswer(question.correct_answer);
    }

    nextButton.style.display = 'block';
}

function highlightCorrectAnswer(correctAnswer) {
    const allLabels = document.querySelectorAll('#options label');
    allLabels.forEach(label => {
        if (label.textContent.trim() === correctAnswer) {
            label.classList.add('correct');
        }
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').textContent = `${score} / ${questions.length}`;
}

document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    fetchQuestions(); // Fetch new questions for the next round
});

function decodeHTML(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}