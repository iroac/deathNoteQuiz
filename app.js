

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
const submitbutton = document.getElementById('submitbutton')
const lThinking = document.getElementById('lthinking')
const rightGif = document.getElementById('gifrightanswer')
const loseGif = document.getElementById('gifLose')
const riukDance = document.getElementById('riukdance')
const finaltext = document.getElementById('textFinal')
const captionFinal = document.getElementById('captionFinal')
const startbutton = document.getElementById('startbutton')
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
                    h3Element.textContent = option
                    h3Element.style.color = 'aquamarine'
                    h3Element.style.fontSize = '30px'
                    listoptions.appendChild(h3Element)
                } else {
                    let h3Element = document.createElement('h3')
                    h3Element.textContent = option
                    h3Element.style.color = 'red'
                    h3Element.style.fontSize = '30px'
                    listoptions.appendChild(h3Element)
                }

            })


        })

        // Update the current question
        currentquestion.innerHTML = question.question
        // teststart = true
        // Store the current options arrays with the boolean

    } else {
        console.log(currentScore)
        // Display Final Content
        finaltext.innerText = `${currentScore}/${questions.length}`;
        if (currentScore === questions.length) {
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
    containerquestion.style.display = 'block'
    renderNextQuestion()
})
nextbutton.addEventListener('click', renderNextQuestion)
window.addEventListener('beforeunload', (event) => {
    if (teststart) {
        event.preventDefault();
        event.returnValue = "";
    }
})


// Event Listeners on Classes






