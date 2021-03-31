import React from "react";
import ReactDOM from "react-dom";
import ScotchInfobar from "./ScotchInfobar.js";

import "./styles.css";

import users from "./users-data";

function Feed() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Iterate over Array and display data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        {users.map((user, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
            <p>{user.location}</p>
            <p>{user.car}</p>
          </div>
        ))}
      </div>
      <ScotchInfobar />
    </div>
  );
}
export default Feed;
