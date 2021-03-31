import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import ScotchInfobar from "./ScotchInfobar.js";
import axios from 'axios';
import "./styles.css";
import Card from './Card.js';
import users from "./users-data";



function Feed() {


  const [issues, setIssues] = useState([{}]);
  const [ok, setOK] = useState(false)

  useEffect(()=>{

    const myToken = localStorage.getItem('vikaraToken');
    axios.get("http://localhost:9000/issues/fetchMyIssues", { headers:{'authorization':"Bearer " + myToken}})
    .then(res=>{
      setIssues(res.data.issues);
      setOK(true);
      console.log(issues);
    })
    .catch(err=>{
      console.log(err);
    })

  }, [ok]);





  if(ok)
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Iterate over Array and display data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        {
            issues.map((issue, index) => (
              <Card issue={issue}/>        ))
        }
      </div>
      <ScotchInfobar />
    </div>
  );
  else
    return (<div></div>)
}
export default Feed;
