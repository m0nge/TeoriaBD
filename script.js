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

const startBtn = document.getElementById('start-btn');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const backToResultsBtn = document.getElementById('back-to-results-btn');

const questionContainer = document.getElementById('question-container');
const progressFill = document.getElementById('progress-fill');
const currentQDisplay = document.getElementById('current-q');
const totalQDisplay = document.getElementById('total-q');
const currentScoreDisplay = document.getElementById('current-score');
const totalQuestionsDisplay = document.getElementById('total-questions');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    questions = [...questionsBank];
    totalQuestionsDisplay.textContent = questions.length;
    
    startBtn.addEventListener('click', startQuiz);
    checkBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    reviewBtn.addEventListener('click', showReview);
    backToResultsBtn.addEventListener('click', backToResults);
});

// Mezclar array usando Fisher-Yates
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
    // Mezclar preguntas
    shuffledQuestions = shuffleArray(questions);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Configurar displays
    totalQDisplay.textContent = shuffledQuestions.length;
    document.querySelectorAll('#total-q').forEach(el => el.textContent = shuffledQuestions.length);
    currentScoreDisplay.textContent = score;
    
    // Cambiar pantalla
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    loadQuestion();
}

// Cargar pregunta
function loadQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Actualizar contador
    currentQDisplay.textContent = currentQuestionIndex + 1;
    
    // Actualizar barra de progreso
    const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Limpiar contenedor
    questionContainer.innerHTML = '';
    
    // Tipo de pregunta
    const typeLabel = document.createElement('span');
    typeLabel.className = 'question-type';
    typeLabel.textContent = question.type === 'multiple' ? 'Selección Múltiple' : 'Completar';
    questionContainer.appendChild(typeLabel);
    
    // Texto de pregunta
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.question;
    questionContainer.appendChild(questionText);
    
    // Renderizar según tipo
    if (question.type === 'multiple') {
        renderMultipleChoice(question);
    } else if (question.type === 'fill') {
        renderFillInBlank(question);
    }
    
    // Resetear botones
    checkBtn.classList.remove('hidden');
    checkBtn.disabled = false;
    nextBtn.classList.add('hidden');
}

// Renderizar pregunta de selección múltiple
function renderMultipleChoice(question) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => {
            // Remover selección previa
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Seleccionar actual
            optionElement.classList.add('selected');
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    questionContainer.appendChild(optionsContainer);
}

// Renderizar pregunta de completar
function renderFillInBlank(question) {
    const inputContainer = document.createElement('div');
    inputContainer.style.marginTop = '20px';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'fill-blank-input';
    input.placeholder = 'Escribe tu respuesta aquí...';
    input.id = 'fill-answer';
    
    inputContainer.appendChild(input);
    questionContainer.appendChild(inputContainer);
    
    // Permitir verificar con Enter
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !checkBtn.disabled) {
            checkAnswer();
        }
    });
}

// Verificar respuesta
function checkAnswer() {
    const question = shuffledQuestions[currentQuestionIndex];
    let userAnswer = null;
    let isCorrect = false;
    
    if (question.type === 'multiple') {
        const selectedOption = document.querySelector('.option.selected');
        if (!selectedOption) {
            alert('Por favor, selecciona una respuesta');
            return;
        }
        
        userAnswer = parseInt(selectedOption.dataset.index);
        isCorrect = userAnswer === question.correct;
        
        // Marcar respuestas
        document.querySelectorAll('.option').forEach((opt, idx) => {
            opt.classList.add('disabled');
            if (idx === question.correct) {
                opt.classList.add('correct');
            } else if (idx === userAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
        
    } else if (question.type === 'fill') {
        const input = document.getElementById('fill-answer');
        userAnswer = input.value.trim();
        
        if (userAnswer === '') {
            alert('Por favor, escribe una respuesta');
            return;
        }
        
        // Verificar si la respuesta es correcta (insensible a mayúsculas)
        isCorrect = question.correctAnswers.some(answer => 
            answer.toLowerCase() === userAnswer.toLowerCase()
        );
        
        input.classList.add(isCorrect ? 'correct' : 'incorrect');
        input.disabled = true;
    }
    
    // Guardar respuesta del usuario
    userAnswers.push({
        question: question,
        userAnswer: userAnswer,
        isCorrect: isCorrect
    });
    
    // Actualizar puntaje
    if (isCorrect) {
        score++;
        currentScoreDisplay.textContent = score;
    }
    
    // Mostrar feedback
    showFeedback(question, isCorrect);
    
    // Deshabilitar check y mostrar next
    checkBtn.disabled = true;
    checkBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
}

// Mostrar feedback
function showFeedback(question, isCorrect) {
    const feedback = document.createElement('div');
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    
    const title = document.createElement('div');
    title.className = 'feedback-title';
    title.innerHTML = isCorrect ? 
        '✅ ¡Correcto!' : 
        '❌ Incorrecto';
    feedback.appendChild(title);
    
    if (!isCorrect && question.type === 'multiple') {
        const correctAnswer = document.createElement('div');
        correctAnswer.style.marginTop = '10px';
        correctAnswer.innerHTML = `<strong>Respuesta correcta:</strong> ${question.options[question.correct]}`;
        feedback.appendChild(correctAnswer);
    } else if (!isCorrect && question.type === 'fill') {
        const correctAnswer = document.createElement('div');
        correctAnswer.style.marginTop = '10px';
        correctAnswer.innerHTML = `<strong>Respuesta correcta:</strong> ${question.correctAnswers.join(' o ')}`;
        feedback.appendChild(correctAnswer);
    }
    
    const explanation = document.createElement('div');
    explanation.className = 'feedback-explanation';
    explanation.innerHTML = `<strong>Explicación:</strong> ${question.explanation}`;
    feedback.appendChild(explanation);
    
    questionContainer.appendChild(feedback);
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
    
    // Actualizar displays
    document.getElementById('final-score').textContent = score;
    document.getElementById('max-score').textContent = shuffledQuestions.length;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('percentage').textContent = `${percentage}%`;
    
    // Mensaje según rendimiento
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
        
        // Número de pregunta
        const questionNumber = document.createElement('div');
        questionNumber.style.fontWeight = 'bold';
        questionNumber.style.color = '#6b7280';
        questionNumber.style.marginBottom = '10px';
        questionNumber.textContent = `Pregunta ${index + 1} de ${userAnswers.length}`;
        reviewItem.appendChild(questionNumber);
        
        // Pregunta
        const questionText = document.createElement('div');
        questionText.className = 'review-question';
        questionText.textContent = answer.question.question;
        reviewItem.appendChild(questionText);
        
        // Respuesta del usuario
        const userAnswerDiv = document.createElement('div');
        userAnswerDiv.className = 'review-answer user';
        const userAnswerLabel = document.createElement('span');
        userAnswerLabel.className = 'review-label';
        userAnswerLabel.textContent = 'Tu respuesta: ';
        userAnswerDiv.appendChild(userAnswerLabel);
        
        if (answer.question.type === 'multiple') {
            userAnswerDiv.appendChild(document.createTextNode(answer.question.options[answer.userAnswer]));
        } else {
            userAnswerDiv.appendChild(document.createTextNode(answer.userAnswer));
        }
        
        if (!answer.isCorrect) {
            reviewItem.appendChild(userAnswerDiv);
        }
        
        // Respuesta correcta
        if (!answer.isCorrect) {
            const correctAnswerDiv = document.createElement('div');
            correctAnswerDiv.className = 'review-answer correct-answer';
            const correctAnswerLabel = document.createElement('span');
            correctAnswerLabel.className = 'review-label';
            correctAnswerLabel.textContent = 'Respuesta correcta: ';
            correctAnswerDiv.appendChild(correctAnswerLabel);
            
            if (answer.question.type === 'multiple') {
                correctAnswerDiv.appendChild(document.createTextNode(answer.question.options[answer.question.correct]));
            } else {
                correctAnswerDiv.appendChild(document.createTextNode(answer.question.correctAnswers.join(' o ')));
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
        
        // Explicación
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
