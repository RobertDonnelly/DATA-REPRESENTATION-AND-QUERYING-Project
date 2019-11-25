import React from 'react';
import logo from './logo.svg';
import './App.css';
//import components
import Footer from './components/footer.js';
import Header from './components/header.js';
import Content from './components/content.js';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch,Route,BrowserRouter } from 'react-router-dom'    
import Add from './components/add';
import Read from './components/read';
import Edit from './components/edit';



class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App" variant="outline-success">
      <Navbar bg="success" variant="light">
    <Nav  bg="outline-success" variant="outline-success">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/albums">Albums</Nav.Link>
      <Nav.Link href="/add">Add Albums</Nav.Link>
    </Nav>
</Navbar>

<Switch>
  <Route exact path="/" component={Content}/>
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
