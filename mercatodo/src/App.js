import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Admin from "./components/Admin/Admin"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (

    <Router>
        <Header />
        
      <Switch>
    
      <Route exact path="/" component={Login} />
      <Route exact path="/registro" component={Register} />
      <Route exact path="/admin" component={Admin} />
      
     
      
      </Switch>

      <Footer/>
    </Router>


  );
}

export default App;
