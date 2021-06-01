import React from 'react'

function UserNch55(props) {
    const {user, addUser} = props;
    return (
        <tr>
         
            <td><img src={user.picture} /></td>
            <td>{user.name} {user.first} {user.last}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.phone}</td>
            <td>{user.state}</td>
            <td><button className="btn btn-primary" onClick={addUser} value={user.email}>Add</button></td>
      
        </tr>
    )
}

export default UserNch55
