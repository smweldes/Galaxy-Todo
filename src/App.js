import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo'


function App() {
  return (
    <div>
      <Navbar/>
     <Switch>
      <Route exact path="/" component={()=><Home/>}/>

      <Route exact path="/add" >
      <AddTodo/>
        </Route>

        <Route exact path="/edit/:id" >
      <EditTodo/>
        </Route>
      
    </Switch>
    </div>
  );
}

export default App;
