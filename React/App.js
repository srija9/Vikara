import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component = {Login}/>
            <Route path = "/Signup" component = {Signup}/>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
