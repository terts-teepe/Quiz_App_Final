function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//kijkt of het antwoord op de vraag (this.answer) gelijk is ann het gegeven antwoord (choice)
Question.prototype.isCorrectAnswer = function(choice) {
	console.log(this.answer);
    return this.answer === choice;
}

