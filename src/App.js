import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';


function App() {
  return (
    <div>
     <Switch>
      <Route exact path="/" component={()=><Home/>}/>
      
        {/* <Route exact path="/add">
        <AddContact/>
        </Route>

        <Route exact path="/edit/:id">
        <EditContact/>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
