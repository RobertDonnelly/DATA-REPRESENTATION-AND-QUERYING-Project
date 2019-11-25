import React from 'react';
import Albums from './albums';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

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
    <div>
    <Card  border="secondary" bg="dark" text="success">
      <Card.Header>
        <h1>This is each album which has been added to our database so far!</h1>
        <h3>You can click the title of the albums to listen on Spotify!</h3>
      </Card.Header>
    </Card>               
     <Albums myAlbums={this.state.albums}></Albums>
    </div>
  );
}
} 

export default Read;