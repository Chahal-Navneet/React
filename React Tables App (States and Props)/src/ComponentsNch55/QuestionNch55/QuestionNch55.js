import React from 'react';

function QuestionNch55(props) {
    const {quizQuestions,checkQuestion,checkSubmit,currQuestion,prevQuestion,nextQuestion,nextFlag,prevFlag,storeAnswer,maxWeight,minWeight} = props;
    let index = 1;
    const questionButtons = quizQuestions.map((question,key)=>{
      
        return <span key={"span" +key }><button className="btn btn-dark" key={key} onClick={()=>checkQuestion(key)}>{key+1}</button>&nbsp;</span>;
    });
    const optionList =  currQuestion.options.map((option,key)=>{  
            return <div className="form-group" key={"div"+ key + currQuestion.options.length}><label><input key={key + currQuestion.options.length} checked={parseInt(currQuestion.answer) === parseInt(option)} type="radio" id={option} className="form-check-input" value={option} name={currQuestion.statement} onChange={()=>storeAnswer(option)} />&nbsp;&nbsp;&nbsp;{option}</label></div>;

    });
  
    return (
        
            
            <div className="d-flex justify-content-center">
                    <table className="table table-borderless caption-top">
                        <caption key="quesCaption">Max Weight for Question: {maxWeight} &nbsp;&nbsp; <br/> Min Weight for Question: {minWeight}</caption>
                        <tbody>
                        <tr >
                            <td colSpan={3} key="questionButtons">{questionButtons}</td>
                        </tr>
                    <tr>          
            

                <td colSpan={4} key="quesStatement"><h2>{currQuestion.statement}</h2></td>
                </tr> 
               
               <tr>
                    
                   <td  colSpan={1} key={optionList}>{optionList}</td></tr>
               <tr>
                   <td colSpan={4} key="quesInputButtons">
                    <input type="button" key="prevoius" disabled={prevFlag} className="btn btn-dark" onClick={prevQuestion} value="Previous"/>&nbsp;
                   <input type="button" key="next" disabled={nextFlag} className="btn btn-dark" onClick={nextQuestion} value="Next"/>&nbsp;
                   <input type="button" key="submit" className="btn btn-dark" onClick={()=>checkSubmit(currQuestion.category)} value="Submit Quiz"/>
                   </td>
                </tr>
               </tbody>
                </table> 
                
            </div>   

            
       
    )
}


export default QuestionNch55;
