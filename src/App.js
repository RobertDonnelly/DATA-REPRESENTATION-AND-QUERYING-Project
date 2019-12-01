import React from 'react';
import './App.css';
//import components
import Home from './components/home.js';
import Add from './components/add';
import Read from './components/read';
import Edit from './components/edit';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch,Route,BrowserRouter } from 'react-router-dom'    




class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App" variant="outline-success">
      <Navbar bg="success" variant="light">
    <Nav  bg="outline-success" variant="outline-success">
    <img position="right" 
    width ="55" 
    height="45"
    href="/"
    src="https://www.svgrepo.com/show/284058/radio-music-and-multimedia.svg">
    </img>

      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/albums">Albums</Nav.Link>
      <Nav.Link href="/add">Add Albums</Nav.Link>

    </Nav>
</Navbar>

<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/add" component={Add}/>
  <Route path="/albums" component={Read}/>
  <Route path="/edit/:id" component={Edit}/>
</Switch>

    </div>
    </BrowserRouter>
  );
}
}

export default App;
