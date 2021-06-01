import React, { Component } from 'react'
import QuestionNch55 from '../QuestionNch55/QuestionNch55';
import DisplayScoreNch55 from '../DisplayScoreNch55/DisplayScoreNch55';
class QuizNch55 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentQuestion: {
                 statement:"23 X 12 ?",
                 options: [356,276,378,256],
                 correctAnswer: 276,
                 category: "Medium",
                 weight: 3
             },
           
             nextFlag:false,
             prevFlag:true,
             category: "Easy",
             questionIndex: 0,
             totalQuestions: 0,
             questionList: [
                 {statement:"23 X 12 ?",options:[356,276,378,256],correctAnswer:276,answer:"",category: "Medium",weight:3},
                 {statement:"49 - 20 ?",options:[30,26,37,29],correctAnswer:29,answer:"",category:"Easy",weight:2},
                 {statement:"56 X 8 ?",options:[567,973,448,897],correctAnswer:448,answer:"",category:"Hard",weight:4},
                 {statement:"79 X 68 ?",options:[5567,5372,4408,4897],correctAnswer:5372,answer:"",category:"Hard",weight:10},
                 {statement:"90 + 42 ?",options:[167,487,132,307],correctAnswer:132,answer:"",category:"Medium",weight:5},
                 {statement:"67 - 689 ?",options:[-622,-583,-782,-679],correctAnswer:-622,answer:"",category:"Hard",weight:7},
                 {statement:"6 X 8 ?",options:[38,67,48,36],correctAnswer:48,answer:"",category:"Easy",weight:1},
                 {statement:"16 - 78 ?",options:[-67,78,62,-62],correctAnswer:-62,answer:"", category: "Easy",weight:2},
                 {statement:"12 + 15 ?",options:[65,89,23,27],correctAnswer:27,answer:"", category: "Easy",weight:1}

             ],
             score:{
                totalQuestions: 0,
                totalCorrectQuestions: 0,
                totalUnansweredQuestions: 0,
                totalIncorrectQuestions: 0,
                maximumScore: 0,
                obtainedScore: 0,
                submitted: false

            }
        }
        this.checkSubmit = this.checkSubmit.bind(this);
        this.updateStatement = this.updateStatement.bind(this);
        this.updateOptions = this.updateOptions.bind(this);
        this.updateCorrectAnswer = this.updateCorrectAnswer.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.checkQuestion = this.checkQuestion.bind(this);
        this.prevQuestion = this.prevQuestion.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this)
        this.storeAnswer = this.storeAnswer.bind(this);
    }

    updateStatement = (e) => {
        this.setState({
            currentQuestion: {
                ...this.state.currentQuestion,
                statement: e.target.value
            }
        })
    }
    
    updateOptions = (e) => {
        this.setState({
            currentQuestion: {
                ...this.state.currentQuestion,
                options: e.target.value
            }
        })
    }
    
    updateCorrectAnswer = (e) => {
        this.setState({
            currentQuestion: {
                ...this.state.currentQuestion,
                correctAnswer: e.target.value
            }
        })
    }
    
    updateCategory = (e) => {
        this.setState({
                questionIndex: 0,
                category: e.target.value
            
        })
    }

    checkSubmit = (cat) => {
        let numQues = 0;
        let numCorrectQues = 0;
        let numIncorrectQues = 0;
        let numUnansweredQues = 0;
        let maxScore = this.state.questionList.filter(ques=> ques.category === cat).map(question=>question.weight).reduce((total,curr)=>{
                numQues += 1;
                return (total+ curr);},0);
        let obtScore = this.state.questionList.filter(ques=> ques.category === cat).map(question=>{
            if(question.answer === question.correctAnswer){
                numCorrectQues += 1;
                return question.weight;
            } else if(question.answer === ""){
                numUnansweredQues += 1;
                return 0;
            } else
            {  
                numIncorrectQues += 1;
                return 0;}

        }).reduce((total,curr)=>{
            return (total+ curr);},0);
        this.setState({
            score:{
                totalQuestions: numQues,
                totalCorrectQuestions: numCorrectQues,
                totalUnansweredQuestions: numUnansweredQues,
                totalIncorrectQuestions: numIncorrectQues,
                maximumScore: maxScore,
                obtainedScore: obtScore,
                submitted: true

            }
        })

    }
    storeAnswer = (option) => {
        console.log(option)
        this.setState({
            currentQuestion: {
                ...this.state.currentQuestion,
                answer: option
            }
        })
    }
    
    checkQuestion = (id) =>{
        this.state.nextFlag  = (this.state.questionIndex == (this.state.totalQuestions - 1)) ? true : false;  
        this.state.prevFlag = (this.state.questionIndex == 0) ? true : false;
        this.setState({
            questionIndex: id
        })
    }
    nextQuestion = () =>{
        
        this.setState({
            questionIndex: this.state.questionIndex + 1
        })
    }
    prevQuestion = () =>{
        this.setState({
            questionIndex: this.state.questionIndex - 1
        })
    }


    render() {
        this.state.questionList = this.state.questionList.map(question => {
            return (question.statement === this.state.currentQuestion.statement) ? this.state.currentQuestion : question;
        });
        let filteredQuestionList = this.state.questionList.filter(question => question.category === this.state.category);
        let maxWeight = filteredQuestionList.map(question=>question.weight).reduce((max,curr)=>{
            return Math.max(max,curr);},-Infinity);
        let minWeight = filteredQuestionList.map(question=>question.weight).reduce((min,curr)=>{
            return Math.min(min,curr);},Infinity);
        this.state.totalQuestions = filteredQuestionList.length;
        this.state.nextFlag  = (this.state.questionIndex == (this.state.totalQuestions - 1)) ? true : false;  
        this.state.prevFlag = (this.state.questionIndex == 0) ? true : false;
        this.state.currentQuestion = filteredQuestionList[this.state.questionIndex];
        
        return (
            <div className="container ">
            <div className="row" key="divRow">
                 <div className="col-sm-4 form-group" key="divCategory"> 
                <select id="category" key="category" className="selectpicker form-control show-tick" onChange = {this.updateCategory} >
                   <option value ="Easy" key="easyOption">Easy</option>
                   <option value="Medium" key="mediumOption">Medium</option>
                   <option value="Hard" key="hardOption">Hard</option>
               </select>   
                <QuestionNch55 key={this.state.currentQuestion.statement} quizQuestions={filteredQuestionList} maxWeight={maxWeight} minWeight={minWeight} storeAnswer={this.storeAnswer} nextFlag={this.state.nextFlag} storeAnswer={this.storeAnswer} prevFlag={this.state.prevFlag} nextQuestion={this.nextQuestion} prevQuestion={this.prevQuestion} checkQuestion={this.checkQuestion} currQuestion={this.state.currentQuestion} checkSubmit={this.checkSubmit}/>
           </div>
           <div className="col-sm-8 text-center" key="divDisplayScore">
                <DisplayScoreNch55 key="score"  score={this.state.score} />
            </div>
            </div>
            </div>

        )
    }
}

export default QuizNch55
