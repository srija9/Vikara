import React, { useState } from 'react';
import axios from 'axios';


function Login(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = ()=>{
    axios.post("http://localhost:9000/auth/login", {email:username, password:password})
    .then(response=>{
      console.log(response.data);
      localStorage.setItem('vikaraToken', response.data.token);
    })
    .catch(err=>{
      console.log(err);
    })


  }

  return (
    <div>
    <h1>
        This is LogIn Page
    </h1>
    <a href = "/Signup">Go to SignUp</a>
    <label>
           <p>Username</p>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange = {(e)=>{setPassword(e.target.value)}}/>
      </label>
      <div>
        <button onClick={handleSubmit}>verify</button>
      </div>
    </div>
  );
}

export default Login;
