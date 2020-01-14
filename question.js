class Question {
    constructor(questions) {
        this.id = questions.id;
        this.question = questions.q;
        this.answers = questions.answers;
        this.correct = questions.correctAnswer;
    }
    render() {
        console.log(this.answers);
    }
}
