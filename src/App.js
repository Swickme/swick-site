import './App.css';
import { Switch, Route , useRouteMatch } from 'react-router-dom'
import Main from './components/Main';


function App() {
  return (
    <div>
            {/* <Switch >
                <Route  path='/'  exact component={Main }  />
            </Switch>  */}
    
           <Main/>    
    </div>
  );
}

export default App;
