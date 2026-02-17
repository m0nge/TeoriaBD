// Variables globales
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let shuffledQuestions = [];

// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const reviewScreen = document.getElementById('review-screen');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    questions = [...questionsBank];
    
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('check-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
    document.getElementById('review-btn').addEventListener('click', showReview);
    document.getElementById('back-to-results-btn').addEventListener('click', backToResults);
});

// Mezclar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Iniciar cuestionario
function startQuiz() {
    const quantity = parseInt(document.querySelector('input[name="quantity"]:checked').value);
    const questionType = document.querySelector('input[name="questionType"]:checked').value;
    
    let filteredQuestions = [...questions];
    if (questionType !== 'all') {
        filteredQuestions = questions.filter(q => q.type === questionType);
        if (filteredQuestions.length === 0) {
            alert('No hay suficientes preguntas de este tipo. Por favor selecciona "Todas mezcladas".');
            return;
        }
    }
    
    shuffledQuestions = shuffleArray(filteredQuestions).slice(0, Math.min(quantity, filteredQuestions.length));
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    document.getElementById('total-q').textContent = shuffledQuestions.length;
    document.getElementById('current-score').textContent = score;
    
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    loadQuestion();
}

// Cargar pregunta
function loadQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    document.getElementById('current-q').textContent = currentQuestionIndex + 1;
    
    const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    
    const typeLabel = document.createElement('span');
    typeLabel.className = 'question-type';
    typeLabel.textContent = question.type === 'truefalse' ? 'Verdadero/Falso' : 'Selección Múltiple';
    container.appendChild(typeLabel);
    
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.question;
    container.appendChild(questionText);
    
    if (question.type === 'truefalse') {
        renderTrueFalse(question, container);
    } else {
        renderMultipleChoice(question, container);
    }
    
    document.getElementById('check-btn').classList.remove('hidden');
    document.getElementById('check-btn').disabled = false;
    document.getElementById('next-btn').classList.add('hidden');
}

// Renderizar selección múltiple
function renderMultipleChoice(question, container) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            optionElement.classList.add('selected');
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    container.appendChild(optionsContainer);
}

// Renderizar verdadero/falso
function renderTrueFalse(question, container) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options';
    
    ['Verdadero', 'Falso'].forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.value = index === 0 ? 'true' : 'false';
        
        optionElement.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            optionElement.classList.add('selected');
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    container.appendChild(optionsContainer);
}

// Verificar respuesta
function checkAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    const selectedOption = document.querySelector('.option.selected');
    
    if (!selectedOption) {
        alert('Por favor, selecciona una respuesta');
        return;
    }
    
    let userAnswer, isCorrect;
    
    if (question.type === 'truefalse') {
        userAnswer = selectedOption.dataset.value === 'true';
        isCorrect = userAnswer === question.correct;
        
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.add('disabled');
            const optValue = opt.dataset.value === 'true';
            if (optValue === question.correct) {
                opt.classList.add('correct');
            } else if (optValue === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
    } else {
        userAnswer = parseInt(selectedOption.dataset.index);
        isCorrect = userAnswer === question.correct;
        
        document.querySelectorAll('.option').forEach((opt, idx) => {
            opt.classList.add('disabled');
            if (idx === question.correct) {
                opt.classList.add('correct');
            } else if (idx === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
    }
    
    userAnswers.push({ question, userAnswer, isCorrect });
    
    if (isCorrect) {
        score++;
        document.getElementById('current-score').textContent = score;
    }
    
    showFeedback(question, isCorrect, userAnswer);
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

// Mostrar feedback
function showFeedback(question, isCorrect, userAnswer) {
    const feedback = document.createElement('div');
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const title = document.createElement('div');
    title.className = 'feedback-title';
    title.innerHTML = isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto';
    feedback.appendChild(title);
    
    if (!isCorrect) {
        const correctAnswer = document.createElement('div');
        correctAnswer.style.marginTop = '10px';
        if (question.type === 'truefalse') {
            correctAnswer.innerHTML = `<strong>Respuesta correcta:</strong> ${question.correct ? 'Verdadero' : 'Falso'}`;
        } else {
            correctAnswer.innerHTML = `<strong>Respuesta correcta:</strong> ${question.options[question.correct]}`;
        }
        feedback.appendChild(correctAnswer);
    }
    
    const explanation = document.createElement('div');
    explanation.className = 'feedback-explanation';
    explanation.innerHTML = `<strong>Explicación:</strong> ${question.explanation}`;
    feedback.appendChild(explanation);
    
    document.getElementById('question-container').appendChild(feedback);
}

// Siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Mostrar resultados
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    const incorrectCount = shuffledQuestions.length - score;
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('max-score').textContent = shuffledQuestions.length;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('percentage').textContent = `${percentage}%`;
    
    const scoreMessage = document.getElementById('score-message');
    if (percentage >= 90) {
        scoreMessage.textContent = '🎉 ¡Excelente! Dominas el tema perfectamente.';
        scoreMessage.style.color = '#10b981';
    } else if (percentage >= 70) {
        scoreMessage.textContent = '👍 ¡Muy bien! Tienes un buen dominio del tema.';
        scoreMessage.style.color = '#3b82f6';
    } else if (percentage >= 50) {
        scoreMessage.textContent = '📚 Bien, pero necesitas repasar algunos conceptos.';
        scoreMessage.style.color = '#f59e0b';
    } else {
        scoreMessage.textContent = '💪 Sigue estudiando, ¡puedes mejorar!';
        scoreMessage.style.color = '#ef4444';
    }
}

// Reiniciar cuestionario
function restartQuiz() {
    resultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Mostrar revisión
function showReview() {
    resultsScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        const questionNumber = document.createElement('div');
        questionNumber.style.fontWeight = 'bold';
        questionNumber.style.color = '#6b7280';
        questionNumber.style.marginBottom = '10px';
        questionNumber.textContent = `Pregunta ${index + 1} de ${userAnswers.length}`;
        reviewItem.appendChild(questionNumber);
        
        const questionText = document.createElement('div');
        questionText.className = 'review-question';
        questionText.textContent = answer.question.question;
        reviewItem.appendChild(questionText);
        
        if (!answer.isCorrect) {
            const userAnswerDiv = document.createElement('div');
            userAnswerDiv.className = 'review-answer user';
            userAnswerDiv.innerHTML = '<span class="review-label">Tu respuesta:</span> ';
            
            if (answer.question.type === 'truefalse') {
                userAnswerDiv.innerHTML += answer.userAnswer ? 'Verdadero' : 'Falso';
            } else {
                userAnswerDiv.innerHTML += answer.question.options[answer.userAnswer];
            }
            
            reviewItem.appendChild(userAnswerDiv);
            
            const correctAnswerDiv = document.createElement('div');
            correctAnswerDiv.className = 'review-answer correct-answer';
            correctAnswerDiv.innerHTML = '<span class="review-label">Respuesta correcta:</span> ';
            
            if (answer.question.type === 'truefalse') {
                correctAnswerDiv.innerHTML += answer.question.correct ? 'Verdadero' : 'Falso';
            } else {
                correctAnswerDiv.innerHTML += answer.question.options[answer.question.correct];
            }
            
            reviewItem.appendChild(correctAnswerDiv);
        } else {
            const correctMark = document.createElement('div');
            correctMark.style.color = '#10b981';
            correctMark.style.fontWeight = 'bold';
            correctMark.style.marginTop = '10px';
            correctMark.textContent = '✅ Respuesta correcta';
            reviewItem.appendChild(correctMark);
        }
        
        const explanation = document.createElement('div');
        explanation.style.marginTop = '15px';
        explanation.style.padding = '15px';
        explanation.style.background = '#f9fafb';
        explanation.style.borderRadius = '8px';
        explanation.style.lineHeight = '1.6';
        explanation.innerHTML = `<strong>Explicación:</strong> ${answer.question.explanation}`;
        reviewItem.appendChild(explanation);
        
        reviewContainer.appendChild(reviewItem);
    });
}

// Volver a resultados
function backToResults() {
    reviewScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
}
