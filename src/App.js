import React, {Component} from "react";
import Header from "./components/header"; 
import Order from "./components/order"; 
import Menu from "./components/menu";
import About from "./components/about";         


      

class App extends Component{
  render(){
    return(
    <>
    <Header/>
    <Order/>
    <Menu/>
    <About/>
    </>
    )
  }
}

export default App;