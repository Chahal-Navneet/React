import React from 'react'

function DisplayScoreNch55(props) {
    const {score} = props;
    return (
        <div>
            {
                
                (score.submitted === true) ? 
                <table className="table table-borderless">  
                <thead className="table-dark">
                    <tr>
            <th><h1>Report Card</h1></th></tr></thead>
            <tbody>
            <tr><td><h2 className="text-center">{score.obtainedScore} / {score.maximumScore}</h2></td></tr>

            <tr><td><h4>Total Questions : {score.totalQuestions}</h4></td></tr>
            <tr><td><h4>Total Correct Answers : {score.totalCorrectQuestions}</h4></td></tr>
            <tr><td><h4>Total Incorrect Answers : {score.totalIncorrectQuestions}</h4></td></tr>
            <tr><td><h4>Total Unanswered Questions : {score.totalUnansweredQuestions}</h4></td></tr>
            </tbody>
            </table> : <div></div>
         }
            
        </div>
    )
}

export default DisplayScoreNch55;
