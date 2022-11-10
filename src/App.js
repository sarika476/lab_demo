import './App.css';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  Link ,
  Redirect} from "react-router-dom";
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      </Switch>
    </Router>
  );
}
export default App;
