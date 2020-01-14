class SingleChoiceQuestion extends Question{
    constructor(question){
        super(question);
    }
    renderAnswer(){
        const id = this.id;
        const answers = this.answers;
        return Object.keys(this.answers).map(function(key){
            return `<input type = 'radio' name = '${id}' value = '${key}'>${answers[key]}`
        }).join('');
    }
    render(){
        return  `<div>                         
                    <p> ${this.question} </p>
                    <div> ${this.renderAnswer()}</div>
                </div>`;

    }
}