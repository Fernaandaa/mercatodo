import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Usuario from "./components/User/User"
import Admin from "./components/Admin/Admin"
import Add from "./components/Add/Add"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (

    <Router>
        <Header />
        
      <Switch>
    
      <Route exact path="/" component={Login} />
      <Route exact path="/registro" component={Register} />
      <Route exact path="/admin" component={Admin} />  
      <Route exact path="/usuario" component={Usuario}/>
      <Route exact path="/add" component={Add} />  

      </Switch>

      <Footer/>
    </Router>


  );
}

export default App;
