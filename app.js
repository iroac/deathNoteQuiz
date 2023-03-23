

// Questions array of objects
const questions = [
    {
        question: 'What is your name',
        options: [
            ['A) Vinicius', true],
            ['B) Olinda', false],
            ['C) João', false]
        ]
    },
    {
        question: 'How old are yoy',
        options: [
            ['A) 18 years old', false],
            ['B) 16 years old', false],
            ['C) 21 years old', true]
        ]
    },
    {
        question: 'Are you a programming',
        options: [
            ['A) No yet, but soon', false],
            ['B) No, but my brother is', false],
            ['C) Yes, but not what a normal one', true]
        ]
    },
    {
        question: 'Do you have any brother alive?',
        options: [
            ['A) No all already die', false],
            ['B) Just 3 of 9 that i had', false],
            ['C) I really dont care', true]
        ]
    },
    {
        question: 'Did you buy a house?',
        options: [
            ['A) Yes, last mouth', false],
            ['B) No, I always rent', false],
            ['C) No, my more owns one instend', true]
        ]
    }
]

// Get Elements
const nextbutton = document.getElementById('buttonnext')
const currentquestion = document.getElementById('questionh1')
const listoptions = document.getElementById('listoptions')
const optionsLi = document.getElementsByClassName('options')

// Values
let currentQuestionValue;
let currentOptionsValue;
let optionsValueTotal;


// Functions
const shuffledQuestions = [...questions]
for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]]
}

let index = 0;
const renderNextQuestion = () => {
    if (index < shuffledQuestions.length) {
        const question = shuffledQuestions[index];
        index++

        currentOptionsValue = question.options.map(item => {
            const h3 = document.createElement('h3')
            h3.classList.add('options')
            h3.textContent = item[0]
            return h3
        });

        if (listoptions.childElementCount > 0) {
            listoptions.innerHTML = '';
        }

        currentOptionsValue.forEach(item => {
            listoptions.appendChild(item)
        })

        // Update the current value
        currentquestion.innerHTML = question.question
        optionsValueTotal = question.options

        console.log(optionsValueTotal)

    } else {
        console.log('Game finish')
    }
}






// Event Listeners
nextbutton.addEventListener('click', renderNextQuestion)
window.addEventListener('load', renderNextQuestion)





