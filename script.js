const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System"
    ],
    correct: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "HyperText Markup Language",
      "Hyper Tool Multi Language",
      "Home Tool Markup Language",
      "HighText Machine Language"
    ],
    correct: "HyperText Markup Language"
  },
  {
    question: "Which year was JavaScript launched?",
    answers: ["1996", "1995", "1994", "None of the above"],
    correct: "1995"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".btn");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.style.display = "none";
  scoreContainer.classList.add("hide");
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  answerBtns.forEach((btn, index) => {
    btn.textContent = currentQuestion.answers[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

function selectAnswer(btn) {
  const selectedAnswer = btn.textContent;
  const correctAnswer = questions[currentQuestionIndex].correct;

  if (selectedAnswer === correctAnswer) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
  }

  answerBtns.forEach(button => {
    button.disabled = true;
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    }
  });

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    nextBtn.style.display = "none";
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("question-container").style.display = "none";
  nextBtn.style.display = "none";
  scoreContainer.classList.remove("hide");
  scoreEl.textContent = score;
  totalEl.textContent = questions.length;
}

function restartQuiz() {
  document.getElementById("question-container").style.display = "block";
  startQuiz();
}

startQuiz();
