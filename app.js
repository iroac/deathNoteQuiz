

// Questions array of objects
const questions = [
    {
        question: 'What happens if you tear a page from a death note?',
        options: [
            ["A) Death Note loses it's power", false],
            ['B) The page works the same as the book it was torn from', true],
            ['C) You die', false],
            ['D) The notebook catches fire and burns up', false]
        ]
    },
    {
        question: 'How many pages are in a Death Note?',
        options: [
            ['A) 666', false],
            ['B) 1.000', false],
            ['C) Infinite', true],
            ['C) One for each year remaining in your life', false]
        ]
    },
    {
        question: 'What is the minimu age someone has to be to be killed by the death note?',
        options: [
            ['A) There is no minimum', false],
            ['B) 780 days old', true],
            ['C) 2 years old', false]
        ]
    },
    {
        question: 'What is the only thing that can kill a shinigami?',
        options: [
            ["A) Saving a humam's life", true],
            ['B) Writing their name in the Death Note', false],
            ['C) they do not die', false]
        ]
    },
    {
        question: 'What must be sacrificed in order to use the power of shinigami eyes',
        options: [
            ['A) The life of a loved one', false],
            ['B) Your natural sight', false],
            ['C) Half your life expectancy', true]
        ]
    },
    {
        question: 'What do you need to do to see the shinigami owner of a Death Note?',
        options: [
            ['A) Simply touch the Death Note', true],
            ['B) Kill your first victim with the Death Note', false],
            ["C) Write the shinigami's name three times", false],
            ["D) offer the shinigami an apple", false],
        ]
    },
    {
        question: 'Unless otherwide specified, how does someone die once added their name to the Death Note?',
        options: [
            ['A) In an accident', false],
            ['B) They just disappear', false],
            ['C) from a heart attack', true],
            ['D) A death god comes to take them', false]
        ]
    },
    {
        question: 'What do you need when you add someone to the Death Note?',
        options: [
            ['A) Their first, middle and last name', false],
            ['B) Only their name', false],
            ['C) Their name and their face', true],
            ['D) Ther full name, photo id, and last two pay stubs', false]
        ]
    },
    {
        question: 'Who did the original Death Note belong to?',
        options: [
            ['A) It had no owner', false],
            ['B) It fell from heaven', false],
            ['C) Ryuk, the shinigami', true],
            ['C) A wizard', false]
        ]
    },
    {
        question: 'What is a shinigami?',
        options: [
            ['A) A god of death', true],
            ['B) An other-wordly monster', false],
            ['C) An Alien', false],
            ['C) A soul in pain', false]
        ]
    }
]

// Get Elements
const nextbutton = document.getElementById('buttonnext')
const currentquestion = document.getElementById('questionh1')
const listoptions = document.getElementById('listoptions')
const submitbutton = document.getElementById('submitbutton')
const lThinking = document.getElementById('lthinking')
const rightGif = document.getElementById('gifrightanswer')
const loseGif = document.getElementById('gifLose')
const riukDance = document.getElementById('riukdance')
const finaltext = document.getElementById('textFinal')
const captionFinal = document.getElementById('captionFinal')
const startbutton = document.getElementById('startbutton')
const restartButton = document.getElementById('restartbutton')
const containerquestion = document.getElementById('containerquestion')
const container = document.getElementById('container')


// Values
let currentQuestionValue;
let currentOptionsValue;
let selectitem;
let currentScore = 0;
let teststart = false;

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

        nextbutton.style.display = 'none'
        loseGif.style.display = 'none'
        riukDance.style.display = 'none'
        rightGif.style.display = 'none'



        // Gerenate the options
        currentOptionsValue = question.options.map(item => {
            const h3 = document.createElement('h3')
            h3.classList.add('options')
            h3.textContent = item[0]

            h3.addEventListener('click', event => {
                if (nextbutton.style.display === 'none') {
                    document.querySelectorAll('.options').forEach(option => {
                        option.style.color = '';
                    });



                    event.target.style.color = 'red'
                    submitbutton.style.display = 'block'
                    lThinking.style.display = 'block'
                    selectitem = event.target.innerHTML
                }
            })


            return h3
        });

        // Delete last questions options if it exist
        if (listoptions.childElementCount > 0) {
            listoptions.innerHTML = '';
        }

        // Add the options inside the div
        currentOptionsValue.forEach(item => {
            listoptions.appendChild(item)
        })

        submitbutton.addEventListener('click', () => {
            nextbutton.style.display = 'block'
            submitbutton.style.display = 'none'
            lThinking.style.display = 'none'
            listoptions.innerHTML = '';

            question.options.map(item => {
                let option = item[0];
                let value = item[1];

                if (selectitem === option && value) {
                    console.log(selectitem, option, value)
                    currentScore += 1;

                    rightGif.style.display = 'block'
                } else if (selectitem === option && !value) {
                    console.log(selectitem, option, value)
                    loseGif.style.display = 'block'
                    riukDance.style.display = 'block'
                }

                if (value) {
                    let h3Element = document.createElement('h3')
                    h3Element.classList.add('optionsanswer')
                    h3Element.textContent = option
                    h3Element.style.color = 'aquamarine'
                    listoptions.appendChild(h3Element)
                } else {
                    let h3Element = document.createElement('h3')
                    h3Element.classList.add('optionsanswer')
                    h3Element.textContent = option
                    h3Element.style.color = 'red'
                    listoptions.appendChild(h3Element)
                }

            })


        })

        // Update the current question
        currentquestion.innerHTML = question.question
        // teststart = true
        // Store the current options arrays with the boolean

    } else {
        // Display Final Content
        finaltext.innerText = `${currentScore}/${questions.length}`;
        if (currentScore === questions.length || currentScore >= questions.length - 2) {
            loseGif.style.display = 'none'
            riukDance.style.display = 'none'
            rightGif.style.display = 'block'
            captionFinal.innerHTML = "Perfert! You are truly a Death Note fan, your name won't be write instend riuk gotta come tonight and give a oportunity to change this world, we count with you"
        } else if (currentScore >= questions.length / 2) {
            loseGif.style.display = 'none'
            riukDance.style.display = 'none'
            rightGif.style.display = 'block'
            captionFinal.innerHTML = "Not bad! You are a regular fan, you are safe to go now. Please rewatch it'll maybe it help levage your IQ"
        } else {
            rightGif.style.display = 'none'
            riukDance.style.display = 'block'
            loseGif.style.display = 'block'
            captionFinal.innerHTML = "You are disgusting, how can someone say the watch it and score so low, waht a shame. Please leave. KIRA will find you in some days just wait to your death now"
        }

        // Final elements
        finaltext.style.display = 'block'
        captionFinal.style.display = 'block'
        restartButton.style.display = 'block'
        // Question elements
        listoptions.style.display = 'none'
        currentquestion.style.display = 'none'
        lThinking.style.display = 'none'
        nextbutton.style.display = 'none'
        submitbutton.style.display = 'none'
        teststart = false
    }
}





// Event Listeners
startbutton.addEventListener('click', () => {
    teststart = true
    container.style.display = 'none'
    containerquestion.style.display = 'flex'
    renderNextQuestion()
})
restartButton.addEventListener('click', () => {
    location.reload()
})
nextbutton.addEventListener('click', renderNextQuestion)
window.addEventListener('beforeunload', (event) => {
    if (teststart) {
        event.preventDefault();
        event.returnValue = "";
    }
})






