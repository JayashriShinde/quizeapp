const questions = [{
    "que": "Which of the folling is a markup language",
    "a": "HTML",
    "b": "css",
    "c": "Javascript",
    "d": "PHP",
    'correct': "a",
},
{
    "que": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "None of the above",
    'correct': "b",
},
{
    'que': "What does css stands for?",
    "a": "Hypertext Markup Language",
    "b": "Cascading Style Sheet",
    "c": "Jason Object Notation",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    'correct': "b",
},
{
    'que': "Inside which HTML element do we put the JavaScript?",
    "a": "<script>",
    "b": "<javascript>",
    "c": "<scripting>",
    "d": "<js>",
    'correct': "a",
},
{
    'que': "HOW does a FOR Loop start?",
    "a": "for(i=0;i<=5)",
    "b": "for(i<=5;i++)",
    "c": "for i=1 to 5",
    "d": "for(i=0;i<=5;i++)",
    'correct': "d",
},
{
    'que': "What are the types of unordered or bulleted list in HTML?",
    "a": "disc, square, triangle",
    "b": " polygon, triangle, circle",
    "c": "disc, circle, square",
    "d": "All of the above",
    'correct': "c",
},
{
    'que': "The correct sequence of HTML tags for starting a webpage is -",
    "a": "Head, Title, HTML, body",
    "b": "HTML, Body, Title, Head",
    "c": "HTML, Head, Title, Body",
    "d": "HTML, Head, Title, Body",
    'correct': "d",
},
{
    'que': "Which type of JavaScript language is ___",
    "a": "Object-Oriented",
    "b": "Object-Based",
    "c": "Assembly-language",
    "d": "High-level",
    'correct': "b",
},
{
    'que': "How to insert an image in HTML?",
    "a": "<img href = 'jtp.pn' />",
    "b": "<img url = 'jtp.png' />",
    "c": "<img link = 'jtp.png'/>",
    "d": "<img src = 'jtp.png' />",
    'correct': "d",
},
{
    'que': "The 'function' and  'var' are known as:",
    "a": "Keywords",
    "b": "Data types",
    "c": "Declaration statements",
    "d": "Prototypes",
    'correct': "c",
},
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer=
                 input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align: center">
    <h3> Thank you for Playing </h3>
    <h2> ${right} / ${total} are correct </h2>
    
    </div>
    `
}

loadQuestion();
















