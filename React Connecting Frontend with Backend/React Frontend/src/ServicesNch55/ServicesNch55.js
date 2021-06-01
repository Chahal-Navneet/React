export async function addUserService(user){
    console.log(user);
    let newUser = JSON.stringify({user:user});
    return fetch(
        `${process.env.REACT_APP_API_BASE_URL}user/`,
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:newUser
        }
    ).then((response) => response.json());
}