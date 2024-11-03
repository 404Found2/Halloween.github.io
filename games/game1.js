class Question {
    constructor(question, ans, c) {
        this.question = question;
        this.choices = ans;
        this.correct = c;
    }
}

////////////////////////QUESTION SET FOR QUIZ////////////////////////
var questions = [
    new Question("What's another name for a lycanthrope?", ['A Werewolf', "A Vampire", "A Witch", "A Bat"], 1),
    new Question("In which country did Halloween originate?", ['Scotland', "Ireland", "United States", "England"], 2),
    new Question("What is not another name for Halloween?", ['Samhain', "All Saints' Day", "All Hallows Eve", "The Feast of the Dead"], 2),
    new Question("Bram Stoker’s Dracula is based on which real-life historical figure?", ['Peter the Great', "Ivan the Terrible", "Vlad the Impaler", "Boris Godunov"], 3),
    new Question("In what year was Candy Corn first manufactured?", ['1888', "1892", "1709", "1945"], 1),
    new Question("What percentage of Americans pretend they're not home on Halloween?", ['33%', "52%", "15%", "21%"], 4),
    new Question("Who wrote classic horror novel It (1986)?", ['Anne Rice', "Clive Barker", "Stephen King", "Judy Blume"], 3),
    new Question("Which US State produces the most pumpkins?", ['Illinois', "North Carolina", "California", "Virginia"], 1),
    new Question("In Mean Girls, what does Cady dress up for Halloween?", ['A clown', "A bloody bride", "A zombie", "A cowgirl"], 2),
    new Question("What vegetable was thought to have magical powers on Halloween?", ['Cabbage', "Squash", "Egg Plant", "Onion"], 1)
];

var quest = document.getElementById("question");
var opA = document.getElementById("I");
var opB = document.getElementById("II");
var opC = document.getElementById("III");
var opD = document.getElementById("IV");

var butA = document.getElementById("one");
var butB = document.getElementById("two");
var butC = document.getElementById("three");
var butD = document.getElementById("four");


var currentQ = 0;
var user = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

////////////////////////SETS QUESTION TO WEBSITE////////////////////////
function setQ() {
    quest.innerHTML = questions[currentQ].question;
    opA.innerHTML = questions[currentQ].choices[0];
    opB.innerHTML = questions[currentQ].choices[1];
    opC.innerHTML = questions[currentQ].choices[2];
    opD.innerHTML = questions[currentQ].choices[3];

    if (currentQ == 0) {
        prev.innerHTML = "Back";
    } else {
        prev.innerHTML = "Back";
    }
    if (currentQ == 9) {
        next.innerHTML = "Submit";
    } else {
        next.innerHTML = "Next";
    }
}

////////////////////////RESET STYLES////////////////////////
function reset() {
    opA.classList.remove("selected");
    opB.classList.remove("selected");
    opC.classList.remove("selected");
    opD.classList.remove("selected");

    butA.checked = false;
    butB.checked = false;
    butC.checked = false;
    butD.checked = false;
}

opA.addEventListener("click", first);
opB.addEventListener("click", second);
opC.addEventListener("click", third);
opD.addEventListener("click", fourth);

butA.addEventListener("click", first);
butB.addEventListener("click", second);
butC.addEventListener("click", third);
butD.addEventListener("click", fourth);

function first() {
    reset();
    opA.classList.add("selected");
    butA.checked = true;
    user[currentQ] = 1;
}

function second() {
    reset();
    opB.classList.add("selected");
    butB.checked = true;
    user[currentQ] = 2;
}

function third() {
    reset();
    opC.classList.add("selected");
    butC.checked = true;
    user[currentQ] = 3;
}

function fourth() {
    reset();
    opD.classList.add("selected");
    butD.checked = true;
    user[currentQ] = 4;
}


////////////////////////MOVE THROUGH QUIZ////////////////////////
var next = document.getElementById("next")
var prev = document.getElementById("back")
var progress = document.getElementById("progress")

next.addEventListener("click", nextQ);
prev.addEventListener("click", prevQ);

function nextQ() {
    currentQ++;
    if (currentQ + 1 <= 10) {
        next.innerHTML = "Next";
        setQ();
        switch (user[currentQ]) {
            case 0:
                reset();
                break;
            case 1:
                first();
                break;
            case 2:
                second();
                break;
            case 3:
                third();
                break;
            case 4:
                fourth();
                break;
        }
        progress.innerHTML = (currentQ + 1) + ' / 10';
        console.log(user);
    } else if (currentQ == 10) {
        if (user.indexOf(0) >= 0) {
            window.alert("You have left at least one question blank. Please make sure to answer it before submitting!!");
            console.log(user);
            currentQ = 9;
        } else {
            calculate();
        }
    } else {
        currentQ = 9;
    }
}

function prevQ() {
    currentQ--;
    if (currentQ >= 0) {
        setQ();
        switch (user[currentQ]) {
            case 0:
                reset();
                break;
            case 1:
                first();
                break;
            case 2:
                second();
                break;
            case 3:
                third();
                break;
            case 4:
                fourth();
                break;
        }
        console.log(user);
        progress.innerHTML = (currentQ + 1) + ' / 10';
    } else {
        currentQ = 0;
    }

}

setQ();



//////////////////////////////////EVALUATE QUIZ//////////////////////////
var submitArea = document.getElementById("ans")
var quiz = document.getElementById("quiz")
function calculate() {
    var score = 0;
    var html = "";
    for (var i = 0; i < user.length; i++) {
        if (user[i] == questions[i].correct) {
            score++;
        }
        html += `<div class="quest">
    <div class="question">`+ questions[i].question + `</div><answers>`;
        if (questions[i].correct == 1) {
            html += `<div class="ans correct">` + questions[i].choices[0] + `</div>`;
        } else if (user[i] == 1) {
            html += `<div class="ans incorrect">` + questions[i].choices[0] + `</div>`;
        } else {
            html += `<div class="ans">` + questions[i].choices[0] + `</div>`;
        }

        if (questions[i].correct == 2) {
            html += `<div class="ans correct">` + questions[i].choices[1] + `</div>`;
        } else if (user[i] == 2) {
            html += `<div class="ans incorrect">` + questions[i].choices[1] + `</div>`;
        } else {
            html += `<div class="ans">` + questions[i].choices[1] + `</div>`;
        }

        if (questions[i].correct == 3) {
            html += `<div class="ans correct">` + questions[i].choices[2] + `</div>`;
        } else if (user[i] == 3) {
            html += `<div class="ans incorrect">` + questions[i].choices[2] + `</div>`;
        } else {
            html += `<div class="ans">` + questions[i].choices[2] + `</div>`;
        }

        if (questions[i].correct == 4) {
            html += `<div class="ans correct">` + questions[i].choices[3] + `</div>`;
        } else if (user[i] == 4) {
            html += `<div class="ans incorrect">` + questions[i].choices[3] + `</div>`;
        } else {
            html += `<div class="ans">` + questions[i].choices[3] + `</div>`;
        }

        html += `</answers></div> `;
    }

    submitArea.style.display = 'block';
    quiz.style.display = 'none';
    submitArea.innerHTML = '<div class="score question" id="score">You Scored ' + score + ' out 10!</div>' + html + "<div class='gap'><a href='./game1.html' class='mainButton'>Try Again!</a>";

}


////////////////////////START QUIZ//////////////////
var start = document.getElementById("start0")

start.addEventListener("click", started);

function started() {
    document.getElementById("first").style.display = 'none';
    quiz.style.display = 'unset';
}