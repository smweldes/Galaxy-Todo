import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';


function App() {
  return (
    <div>
      <Navbar/>
     <Switch>
      <Route exact path="/" component={()=><Home/>}/>

      <Route exact path="/add" >
      <AddTodo/>
        </Route>
      
    </Switch>
    </div>
  );
}

export default App;
