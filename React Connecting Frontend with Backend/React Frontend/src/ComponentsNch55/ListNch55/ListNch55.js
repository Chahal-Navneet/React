import React from 'react'
import UserNch55 from './../UserNch55/UserNch55'
function ListNch55(props) {
    const {userList,addUser} = props;
    

    let users = userList.map((user,key) => {
        return <UserNch55 key={key} user={user} addUser={addUser} />;
    })
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>State</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        </div>
    )
}

export default ListNch55
