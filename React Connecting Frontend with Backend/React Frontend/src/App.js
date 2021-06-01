import React, { useState, useEffect } from "react";
import HeaderNc55 from './ComponentsNch55/HeaderNch55/HeaderNch55'
import MainNCh55 from './ComponentsNch55/MainNCh55/MainNch55'
import { addUserService } from './ServicesNch55/ServicesNch55';

function App() {
const url = 'https://randomuser.me/api/?inc=name,gender,email,dob,picture,phone,location&results=10';

const [userList,setUserList] = useState([]);

const [user,setUser] = useState({});
const [loading,setLoading] =useState(true);


const fetchFromAPI = () => {
  setLoading(true);
  fetch(url)
    .then(response => response.json())
    .then(jsonData => { 
      let jsonList = [];
      jsonData.results.forEach(json => {
        let data = {
          "picture":json.picture.medium,
          "name":json.name.first,
          "email":json.email,
          "age":json.dob.age,
          "state":json.location.state,
          "phone":json.phone
        }
        jsonList.push(data);
      } );
      
      setUserList(jsonList);
   })
     
      setLoading(false);
}

useEffect(() => {
    fetchFromAPI();
},[])

async function addUser(e)
{ let newUser ={};
 userList.forEach(user => {
  if(user.email === e.target.value){
    newUser = user;

  }
})
setUser(newUser);
await addUserService(user);

}
if(loading) return (<div>Loading</div>)
  return (
    <div className="App">
      <HeaderNc55 />
      <MainNCh55 userList={userList} addUser={addUser}/>
    </div>
  );
}

export default App;
