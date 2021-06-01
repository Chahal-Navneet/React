import React from 'react'

function AddTableNch55(props) {
    const {table,upTableType,upTableNumber,upTableRange,addTab,updateTab,updateFlag,warning} = props;
    return (
        <div className="border-end ">
                <h1>Add a Table</h1>
                <h6 className="text-danger">{warning}</h6>
                <div className="form-group row">
               <label>Choose a type :</label>
               <div className="col-sm-10">
               
               <select id="type" className="form-control" onChange = {upTableType} value={table.tableType}>
                   <option value ="Multiplication">Multiplication</option>
                   <option value="Addition">Addition</option>
                   <option value="Subtraction">Subtraction</option>
               </select>
               </div>
               </div><br/>
               <div className="form-group">
               <label>Enter horizontal range : </label>
               <div className="col-sm-10">
               <input type="number" className="form-control" size="16" id="name" min="1" value={table.tableNumber} onChange={upTableNumber}></input>
               </div></div>
               <br/>
               <div className="form-group">
               <label>Enter vertical range : </label>
               <div className="col-sm-10">
               <input type="number" className="form-control" size="16" id="amount" min="1" value={table.tableRange}onChange={upTableRange}></input>
               </div></div>
               <br/>
               <div className="form-group row">
               <div className="col-sm-5">
               <button className="btn btn-dark" onClick={addTab}>Add Table</button>
                </div>
                <div className="col-sm-5">
               <button className="btn btn-dark" disabled={!updateFlag} onClick={updateTab}>Update Table</button></div>
                </div><br/>
               
        </div>
    )
}

export default AddTableNch55;
