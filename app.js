

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

// Values
let currentQuestionValue;
let currentOptionsValue;


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

        // Update the current value
        currentQuestionValue = question.question
        currentquestion.innerHTML = currentQuestionValue
        currentOptionsValue = question.options

        console.log(currentOptionsValue[0][0])


    } else {
        console.log('Game finish')
    }
}

// let optionsRendered = currentOptionsValue.map(item => {
//     const li = document.createElement('li')
//     li.textContent = item[0]
//     return li
// });

// optionsRendered.forEach(item => {
//     listoptions.appendChild(item)
// })


// Event Listeners
nextbutton.addEventListener('click', renderNextQuestion)
window.addEventListener('load', renderNextQuestion)





