function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // Vraag laten zien.
        const element = $('#question')[0];
        let questionAndText = `<h2 id="questionIndex">Question ${quiz.questionIndex + 1}</h1>`;
        questionAndText += `<h3>${quiz.getQuestion().text}</h3>`; //Haalt het object van de vraag op met getQuestion.
        element.innerHTML = questionAndText;

        // Antwoorden laten zien.
        const choices = quiz.getQuestion().choices;
        for(let i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i); 
            element.innerHTML = choices[i]; 
            guess("btn" + i, choices[i]); //Kijkt met onclick of het gekozen antwoord gelijk is aan correct answer.
        }
        showProgress();
    }
};

//onclick functie voor de button (het antwoord) waarop geklikt die wordt vegeleken met correct answer.
function guess(id, guess) {
    document.getElementById(id).onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    const currentQuestionNumber = quiz.questionIndex + 1;
    const element = $('#progress')[0];
    element.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

function showScores() {
    $('#emma')[0].style.display="none"; 
    const element = $('#quiz')[0];
    let gameOverHTML = `<div class="containerTwo">
                            <img class="box imageOne" src="img/emmaTwo.png" id="emma"/>
                            <div class="talk-bubble tri-right left-in round box">
                              <div class="talktext">
                                <p>Je hebt ${quiz.score} van de ${quiz.questions.length} vragen goed beantwoord!<br>Nog een keer spelen?</p>
                              </div>
                            </div>
                        </div>`
    gameOverHTML += "<button id='myButton'>play again</button>";
    element.innerHTML = gameOverHTML;
    document.getElementById("myButton").onclick = function () {
        location.href = "index.html";
    };
};


