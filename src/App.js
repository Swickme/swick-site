import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Main from './components/Main';
import StorePage from './components/stores/StorePage';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact={true} path="/" render={() => <Main/>} />
            <Route exact={true} path="/store" render={() => <StorePage/>} />
          </Switch>
        </Router>
     
    </div>
  );
}

export default App;
