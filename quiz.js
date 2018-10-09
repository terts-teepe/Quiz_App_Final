function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
	//Geeft het object van de huidige vraag terug (text, choices en answers)
    return this.questions[this.questionIndex];
}

//questionIndex + 1 na antwoord. Bij goed antwoord ook score + 1 en afspeken correcSound.
Quiz.prototype.guess = function(choice) {
    if(this.getQuestionIndex().isCorrectAnswer(choice)) {
    	const correctSound = new Audio('https://ia801504.us.archive.org/15/items/correct-sound-effect/correct-sound-effect.mp3');
		correctSound.play();
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

