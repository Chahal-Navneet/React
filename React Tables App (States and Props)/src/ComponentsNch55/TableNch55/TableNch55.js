import React from 'react';

function TableNch55(props) {
    const {tableType,tableNumber,tableRange,handleView,handleDelete,handleEdit} = props;
    return (
         
            <tr>
                <td>{tableType}</td>
                <td>{tableNumber}</td>
                <td>{tableRange}</td>
                <td><button className="btn btn-dark" onClick={handleView}>View</button></td>
                <td><button className="btn btn-dark" onClick={handleEdit}>Edit</button></td>
            <td><button className="btn btn-dark" onClick={handleDelete}>Delete</button></td>
            </tr>
        
    )
}

export default TableNch55;
