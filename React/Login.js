import React from 'react';

function App() {
  return (
    <div>
    <h1>
        This is LogIn Page
    </h1>
    <a href = "/Signup">
        Go to SignUp
    </a>

        <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>

    
    
    </div>
  );
}

export default App;
