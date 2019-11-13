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
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';



class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/">Header</Nav.Link>
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
    </Nav>
</Navbar>

<Switch>
  <Route exact path="/" component={Content}/>
  <Route path="/create" component={Create}/>
  <Route path="/read" component={Read}/>
  <Route path="/edit/:id" component={Edit}/>
</Switch>

    </div>
    </BrowserRouter>
  );
}
}

export default App;
