let quiz;

//aanmaken van opties voor aantal vragen
let select = '';
for (i=5;i<=20;i++){
    select += '<option val=' + i + '>' + i + '</option>';
}
$('#amount').html(select);

//Verkleinen van emma.png
$("#letsPlay").click(function(){
    $('#emma').css({
        'width': '12%'
    });
    //Alles onder de ID 'startQuiz' vervangen door ID 'Quiz'
    $('#startQuiz')[0].style.display="none"; 
    $('#quiz')[0].style.display="block"; 

    //creëren van jsonString; Vragen ophalen d.m.v. API; in juiste format pushen naar Array en binden aan questions prototype
    $(function () {
        function update() {
            let questions = [];
            let jsonString = "https://opentdb.com/api.php?" + $('form').serialize() + "&type=multiple";

            $.getJSON(jsonString, function (data) {
                for (i = 0; i < data.results.length; i++) {
                    let randomNumber = Math.floor(Math.random()*(4));
                    let allAnswers = [data.results[i].incorrect_answers[0], data.results[i].incorrect_answers[1], data.results[i].incorrect_answers[2]];
                    let correctAnswer = data.results[i].correct_answer;
                    allAnswers.splice(randomNumber, 0, correctAnswer);
                    questions.push(new Question(data.results[i].question, [allAnswers[0], allAnswers[1], allAnswers[2], allAnswers[3]], data.results[i].correct_answer))
                }
            })//Quiz creëren met opgehaalde vragen en bijbehorende antwoorden.
            .done(function () {
                quiz = new Quiz(questions);
                populate();
            });
        };
        update();
    })
});

    