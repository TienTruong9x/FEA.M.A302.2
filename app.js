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
        var score = 0;
        const obj = {};

        for (let i = 0; i < answers.length; i++) {
            console.log(answers[i].name);
            const id = parseInt(answers[i].name);
            if (obj[id] == undefined) {
                obj[id] = answers[i].value;
            } else {
                obj[id] += answers[i].value;    
            }

        }

        for(let i=0;i<questions.length;i++){
            if(obj[i]!=undefined){
                if(obj[i]==questions[i].correctAnswer){
                    score+=1;
                }
            }
            
        }
            
            // if(Object.keys(obj)==e['correctAnswer']){
            //     console.log(Object.keys(obj));
            //     console.log(e['correctAnswer']);
            // }
        document.querySelector('#point').innerHTML=score+" Out of "+ questions.length;
    }
    test() {
      
    }

}
window.onload = function () {
    new App(questions, '#container').render();
    // new App(questions, "#container")
}