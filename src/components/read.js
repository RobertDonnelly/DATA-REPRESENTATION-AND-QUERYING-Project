import React from 'react';
import Albums from './albums';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Read extends React.Component {

  state = {
    albums: [ ]
  };
  componentDidMount() {
    
    axios.get('http://localhost:4000/api/albums')
    .then((response)=>{
      this.setState({albums: response.data.albums});
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  render(){
  return (
    <div  border="secondary" bg="dark">
    <Card  border="secondary" bg="dark" text="success">
      <Card.Header>
        <h1>This is each album which has been added to our database so far!</h1>
        <h3>You can click the title of the albums to listen on Spotify!</h3>
      </Card.Header>
    </Card>   

    <Card border="secondary" bg="dark">        
     <Albums myAlbums={this.state.albums}></Albums>
     </Card>    

     <Card border="secondary" bg="dark" text="success">  
     <Container>    
     <Row>

    <Col xs={6} md={4}>
    <img width ="80" height="80" 
     src="https://www.svgrepo.com/show/25153/spotify.svg"></img></Col>
   
    <Col xs={6} md={4}>
    <img width ="80" height="80" 
     src="https://www.svgrepo.com/show/25161/soundcloud.svg"></img></Col>
   
    <Col xs={6} md={4}>
    <img width ="80" height="80" 
     src="https://www.svgrepo.com/show/268534/cloud-computing-music.svg"></img></Col>

    </Row>
     </Container> 
     </Card>    
    </div>
    
  );
}
} 

export default Read;