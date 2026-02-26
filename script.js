// Game State
const gameState = {
    currentCharacter: null,
    attempts: 0
};

// Riddles and Answers for each character
const gameData = {
    ylenia: {
        riddle: "Non ha prurito, però si gratta?",
        answer: ["formaggio", "il formaggio", "Formaggio"],
        prize: "images/prize-ylenia.jpg",
        prizePlaceholder: "images/premio.png",
        characterImg: "images/ylenia.jpg",
        characterImgPlaceholder: "images/placeholder-ylenia.svg"
    },
    noemi: {
        riddle: "Cosa c'è alla fine dell'arcobaleno, al centro dell'atomo e all'inizio dell'oceano?",
        answer: ["La lettera \"o\"", "La o", "la o", "o", "O", "La lettera o"],
        prize: "images/prize-noemi.jpg",
        prizePlaceholder: "images/premio.png",
        characterImg: "images/noemi.jpg",
        characterImgPlaceholder: "images/placeholder-noemi.svg"
    }
};

// DOM Elements
const characterSelection = document.getElementById('character-selection');
const riddleScreen = document.getElementById('riddle-screen');
const prizeScreen = document.getElementById('prize-screen');
const characterCards = document.querySelectorAll('.character-card');
const backButton = document.querySelector('.back-button');
const answerForm = document.getElementById('answer-form');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const restartButton = document.getElementById('restart-button');
const changeCharacterButton = document.getElementById('change-character-button');

// Initialize the game
function init() {
    // Add event listeners to character cards
    characterCards.forEach(card => {
        card.addEventListener('click', () => selectCharacter(card.dataset.character));
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectCharacter(card.dataset.character);
            }
        });
    });

    // Back button
    backButton.addEventListener('click', goToCharacterSelection);

    // Answer form submission
    answerForm.addEventListener('submit', handleAnswerSubmit);

    // Restart button
    restartButton.addEventListener('click', () => {
        gameState.attempts = 0;
        showRiddleScreen();
    });

    // Change character button
    changeCharacterButton.addEventListener('click', () => {
        gameState.currentCharacter = null;
        gameState.attempts = 0;
        goToCharacterSelection();
    });
}

// Select a character
function selectCharacter(character) {
    gameState.currentCharacter = character;
    gameState.attempts = 0;
    showRiddleScreen();
}

// Show character selection screen
function goToCharacterSelection() {
    hideAllScreens();
    characterSelection.classList.add('active');
    answerInput.value = '';
    feedback.classList.remove('show');
}

// Show riddle screen
function showRiddleScreen() {
    hideAllScreens();
    riddleScreen.classList.add('active');
    
    const data = gameData[gameState.currentCharacter];
    
    // Set character name and image
    document.getElementById('selected-character-name').textContent = 
        gameState.currentCharacter.charAt(0).toUpperCase() + gameState.currentCharacter.slice(1);
    
    const characterImg = document.getElementById('selected-character-img');
    characterImg.src = data.characterImg;
    characterImg.alt = gameState.currentCharacter;
    characterImg.onerror = function() {
        this.src = data.characterImgPlaceholder;
    };
    
    // Set riddle
    document.getElementById('riddle-text').textContent = data.riddle;
    
    // Clear previous feedback and input
    answerInput.value = '';
    feedback.classList.remove('show', 'success', 'error');
    
    // Focus on input
    answerInput.focus();
}

// Show prize screen
function showPrizeScreen() {
    hideAllScreens();
    prizeScreen.classList.add('active');
    
    const data = gameData[gameState.currentCharacter];
    const prizeImg = document.getElementById('prize-image');
    prizeImg.src = data.prize;
    prizeImg.alt = `Premio per ${gameState.currentCharacter}`;
    prizeImg.onerror = function() {
        this.src = data.prizePlaceholder;
    };
}

// Hide all screens
function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

// Handle answer submission
function handleAnswerSubmit(e) {
    e.preventDefault();
    
    const userAnswer = answerInput.value.trim().toLowerCase();
    const data = gameData[gameState.currentCharacter];
    
    gameState.attempts++;
    
    // Check if answer is correct
    const isCorrect = data.answer.some(validAnswer => 
        userAnswer === validAnswer.toLowerCase()
    );
    
    if (isCorrect) {
        showFeedback('Corretto! 🎉', 'success');
        setTimeout(() => {
            showPrizeScreen();
        }, 1500);
    } else {
        if (gameState.attempts >= 600) {
            showFeedback(
                `Non è corretto. Suggerimento: La risposta è "${data.answer[0]}". Riprova!`,
                'error'
            );
            gameState.attempts = 0; // Reset attempts after hint
        } else {
            showFeedback('Non è la risposta corretta. Riprova! 🤔', 'error');
        }
        answerInput.value = '';
        answerInput.focus();
    }
}

// Show feedback message
function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = 'feedback show ' + type;
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
