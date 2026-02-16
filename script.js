// Variables globales
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let shuffledQuestions = [];
let config = {
    quantity: 25,
    questionType: 'all'
};

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

// Variables para drag and drop
let draggedElement = null;
let currentOrder = [];

// Variables para matching
let selectedMatchingItem = null;
let matchedPairs = [];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    questions = [...questionsBank];
    
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
    // Obtener configuración
    config.quantity = parseInt(document.querySelector('input[name="quantity"]:checked').value);
    config.questionType = document.querySelector('input[name="questionType"]:checked').value);
    
    // Filtrar preguntas según tipo seleccionado
    let filteredQuestions = [...questions];
    if (config.questionType !== 'all') {
        filteredQuestions = questions.filter(q => q.type === config.questionType);
        
        // Si no hay suficientes preguntas del tipo seleccionado
        if (filteredQuestions.length === 0) {
            alert('No hay preguntas disponibles de este tipo. Selecciona "Todas mezcladas".');
            return;
        }
    }
    
    // Mezclar y seleccionar cantidad
    shuffledQuestions = shuffleArray(filteredQuestions).slice(0, Math.min(config.quantity, filteredQuestions.length));
    
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
    
    // Reset variables
    selectedMatchingItem = null;
    matchedPairs = [];
    currentOrder = [];
    
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
    const typeNames = {
        'multiple': 'Selección Múltiple',
        'truefalse': 'Verdadero/Falso',
        'matching': 'Emparejar',
        'ordering': 'Ordenar Secuencia'
    };
    typeLabel.textContent = typeNames[question.type] || 'Pregunta';
    questionContainer.appendChild(typeLabel);
    
    // Texto de pregunta
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.question;
    questionContainer.appendChild(questionText);
    
    // Renderizar según tipo
    switch(question.type) {
        case 'multiple':
            renderMultipleChoice(question);
            break;
        case 'truefalse':
            renderTrueFalse(question);
            break;
        case 'matching':
            renderMatching(question);
            break;
        case 'ordering':
            renderOrdering(question);
            break;
    }
    
    // Resetear botones
    checkBtn.classList.remove('hidden');
    checkBtn.disabled = false;
    nextBtn.classList.add('hidden');
}

// ... [resto del código continúa en el siguiente mensaje]
