class App {
    constructor(questions, container) {
        this.questions = questions.map(q =>q.multi ? new MultiChoiceQuestion(q) : new SingleChoiceQuestion(q));
        this.container = document.querySelector(container);
        this.nextBtn = document.querySelector("#next");
        this.nextBtn.addEventListener('click', this.next.bind(this));
        this.prevBtn = document.querySelector("#prev");
        this.prevBtn.addEventListener('click', this.prev.bind(this));
        this.submitBtn = document.querySelector("#submit");
        this.submitBtn.addEventListener('click', this.submit.bind(this));
        this.current = 0;
    }
    render() {
        this.container.innerHTML = this.questions.map(q => q.render()).join('');
        this.setCurrentActive();

    }
    next() {
        this.removeCurrentActive();
        this.current += 1;
        this.setCurrentActive();
    }
    prev() {
        this.removeCurrentActive();
        this.current -= 1;
        this.setCurrentActive();
    }
    setCurrentActive() {
        this.container.children[this.current].classList.add('active');
    }
    removeCurrentActive() {
        this.container.children[this.current].classList.remove('active');
    }
    submit() {
        const answers = document.querySelectorAll('input:checked');
        let score = 0;
        const obj = {};

        for (let i = 0; i < answers.length; i++) {
            const id = parseInt(answers[i].name);
            if (obj[id] === undefined) {
                obj[id] = answers[i].value;
            } else {
                obj[id] += answers[i].value;    
            }

        }
        for(const e in obj){
            console.log(e);
            console.log(questions[0].correctAnswer);
            // if(e==questions.correctAnswer){
            //     console.log(e);
            //     score+=1;
            // }
        }
        console.log(score);
    }
    test() {
       
    }

}
window.onload = function () {
    new App(questions, '#container').render();
    // new App(questions, "#container")
}