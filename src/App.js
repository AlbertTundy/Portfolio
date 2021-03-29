// import logo from './logo.svg';
// import './App.css';
import React from "react"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component{

    render() {
        return (
            <>
              <Router>
                <Navbar/>
                  <Switch>
                    <Route
                      exact path = "/Home" component = {Home}
                    />
                    <Route
                      exact path = "/Contact" component = {Contact}
                    />
                    <Route
                      exact path = "/Projects" component = {Projects}
                    />
                    <Route
                       component = {Home}
                    />
                  </Switch>
                  <Footer/>
              </Router>
            </>
        )


    }



}
export default App
