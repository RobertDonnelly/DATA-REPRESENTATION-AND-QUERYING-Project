import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

class Content extends React.Component {
 
 render(){
  return (
    <div className="App" style={{backgroundColor: "lightblue"}}>
     <Card  border="secondary" bg="dark" text="primary">
      <Card.Header>
        <h1>Hello</h1>
      </Card.Header>
    </Card> 
    </div>
  );
}
}

export default Content;
    
