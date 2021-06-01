import React from 'react'
import ListNch55 from './../ListNch55/ListNch55'
function MainNch55(props) {
  const {userList,addUser} = props;
    return (
        <div className="container">
            <ListNch55  userList={userList} addUser={addUser}/>
        </div>
    )
}

export default MainNch55;
