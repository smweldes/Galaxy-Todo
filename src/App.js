import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
     <Switch>
      <Route exact path="/" component={()=><Home/>}/>
      
    </Switch>
    </div>
  );
}

export default App;
