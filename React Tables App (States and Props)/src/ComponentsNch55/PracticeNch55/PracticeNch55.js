import React, { Component } from 'react'

export class PracticeNch55 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                category: "Easy",
                type: "Multiplication",
                correctAnswer: "",
                operation: "X" ,
                answer: "",
                outputText: "",
                num1: 100,
                num2: 123,
                
        }
        this.updateType = this.updateType.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    updateCategory = (e) => {
        let number1 = 0;
        let number2 = 0;
        let correctAns = 0;

        if(e.target.value === "Easy"){
            
            number1 = Math.floor((Math.random() * 100) + 1);
            number2 = Math.floor((Math.random() * 100) + 1);
          
           
        } else if (e.target.value === "Medium"){
            
            number1 = 100 + Math.floor((Math.random() * 100) + 1);
            number2 = 100 + Math.floor((Math.random() * 100) + 1);
        
           
        } else if(e.target.value === "Hard"){
            
            number1 = 200 + Math.floor((Math.random() * 100) + 1);
            number2 = 200 + Math.floor((Math.random() * 100) + 1);
       
            
        }
     
        this.setState({
            category: e.target.value,
            num1: number1,
            num2: number2,
        })
    }
    updateType = (e) => {
        let op = "";
        if(e.target.value == "Multiplication") {
            op = "X";  
        }  if (e.target.value == "Addition"){
            op = "+";
        }  if (e.target.value == "Subtraction"){
            op = "-";
        }
        this.setState({
            operation: op,
            type: e.target.value
        })
    }
    updateAnswer = (e) => {
        this.setState({
            answer: e.target.value
        })
    }
    checkAnswer = () => {
        let correctAns = 0;
        if(this.state.type == "Multiplication") {
            correctAns = this.state.num1 * this.state.num2;
        }  if (this.state.type == "Addition"){        
            correctAns = this.state.num1 + this.state.num2;  
        }  if (this.state.type == "Subtraction"){  
            correctAns = this.state.num1 - this.state.num2; 
        }


            this.setState({
                correctAnswer: correctAns,
                outputText: (parseInt(correctAns) === parseInt(this.state.answer)) ? "Correct Answer : " : `Incorrect. The correct answer is `
            })
       
    }
    
    render() {
        
        let question = <td>{this.state.num1} {this.state.operation} {this.state.num2} ? </td>

        return (
            <div >
                       
            <div className="form-group">
               <label>Choose Category :</label>
               <div className="col-sm-4">
               <select id="category" className="form-control" onChange = {this.updateCategory} >
                   <option value ="Easy">Easy</option>
                   <option value="Medium">Medium</option>
                   <option value="Hard">Hard</option>
               </select>
               </div>
               </div>
               <br/>
               <div className="form-group">
               <label>Choose Type :</label>
               <div className="col-sm-4">
               <select id="type" className="form-control" name="type" onChange = {this.updateType} >
                   <option value ="Multiplication">Multiplication</option>
                   <option value="Addition">Addition</option>
                   <option value="Subtraction">Subtraction</option>
               </select>
               <table className="table table-borderless">
                   <tbody>
                       <tr>
                            {question}
                       </tr>
                       <tr><td><input className="form-control" type="number" name="cat" onChange={this.updateAnswer}/></td></tr>
                       <tr><td><input type="button" className="btn btn-dark" onClick={()=>this.checkAnswer()} value="Check Answer"/></td></tr>
                       <tr><td>{this.state.outputText} {this.state.correctAnswer}</td></tr>
                   </tbody>
               </table>
               </div>
               </div><br/>
        
            </div>
        )
    }
}

export default PracticeNch55
