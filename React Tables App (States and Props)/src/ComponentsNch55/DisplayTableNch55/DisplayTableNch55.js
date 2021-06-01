import React from 'react'

function DisplayTableNch55(props) {
    const {tableData} = props;
    const tableType = tableData.tableType;
    const tableNumber = tableData.tableNumber;
    const tableRange = tableData.tableRange;
    let table = new Array(tableRange);
    let horizontalHeader = new Array(tableNumber+1);
    
    for(let k = 1; k <=tableRange; k++){
        
        table[k-1] = new Array(tableNumber);
    }
        if(tableType == "Multiplication"){
            horizontalHeader[0] = "X";
        for(let i = 1; i <= tableRange; i++){
            for(let j =1; j <=tableNumber; j++){
                horizontalHeader[j] = j;
                table[i-1][j-1] = i * j;
            }
        }
    } else if (tableType == "Addition"){
        horizontalHeader[0] ="+";
        
        for(let i = 1; i <= tableRange; i++){
            for(let j =1; j <=tableNumber; j++){
                horizontalHeader[j] = j;
                table[i-1][j-1] = i + j;
            }
        }
    } else if(tableType == "Subtraction") {
        horizontalHeader[0] = "-";
        for(let i = 1; i <= tableRange; i++){
            for(let j =1; j <=tableNumber; j++){
                horizontalHeader[j] = j;
                table[i-1][j-1] = i - j;
            }
        }
    }
    const tableRowsToDisplay = table.map((row,key) => {
        return <tr className="w-75" key={"tr"+ key}><th className="bg-dark text-white" scope="col">{key + 1}</th>{ 
            row.map(cell => {
           return <td key={"td" + cell}>{cell}</td>    
        })
        }
        </tr>
    });
    const tableHeaderToDisplay = horizontalHeader.map(row => {
        return <th className="bg-dark text-white" scope="col" key={"th" + row}>{row}</th>
    })
    
    return (
        <div className=" justify-content-center">
            <h3 className="text-center">{tableType}</h3>
            <table className="table table-hover table-borderd text-center caption-top">
                <caption className="text-center"> Table Grid of {tableNumber} {horizontalHeader[0]} {tableRange}</caption>

                <thead>
                        <tr>
                            {tableHeaderToDisplay}
                        </tr>
                    </thead>
            <tbody>
            { 
                tableRowsToDisplay
            }
            </tbody>
            </table>
        </div>
    )
}

export default DisplayTableNch55;
