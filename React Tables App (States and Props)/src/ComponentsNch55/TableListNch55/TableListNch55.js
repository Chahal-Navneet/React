import React from 'react';
import TableNch55 from '../TableNch55/TableNch55';



function TableListNch55(props) {
    const {tableList,viewTable,deleteTable,editTable} = props
    const tableListContent = tableList.map((table,key) =>
        {
            return <TableNch55 tableType={table.tableType} 
                tableNumber={table.tableNumber} 
                tableRange = {table.tableRange}
                handleView= {()=>viewTable(table)}
                key={key}
                handleEdit={()=>editTable(table)}
                handleDelete ={()=>deleteTable(table)}/>
        });
    return (
        <div>
            <table className="table table-hover ">
                    <thead>
                        <tr>
                        <th scope="col">Table Type</th>
                        <th scope="col">Horizontal Range</th>
                        <th scope="col">Vertical Range</th>
                        <th scope="col">View</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                {tableListContent}
                </tbody>
                </table> 
        </div>
    )
}

export default TableListNch55;



