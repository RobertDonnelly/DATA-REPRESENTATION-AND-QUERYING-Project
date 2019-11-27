import React from 'react';
import axios from 'axios';
import { watchFile } from 'fs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Add extends React.Component {

  //album title
  //artist
  //artistPhoto
  //year
  //genre
  //coverphoto
  //publisher
  //urlplay

  constructor(props) {
    super(props);
    this.state = {Title: '',
                  Artist:'',
                  ArtistPhoto:'',
                  Year:'',
                  Genre:'',
                  Cover:'',
                  Publisher:'',
                  Play:'',
                };

    this.handleChangeAlbumTitle = this.handleChangeAlbumTitle.bind(this);
    this.handleChangeAlbumArtist = this.handleChangeAlbumArtist.bind(this);
    this.handleChangeAlbumArtistPhoto = this.handleChangeAlbumArtistPhoto.bind(this);
    this.handleChangeAlbumYear = this.handleChangeAlbumYear.bind(this);
    this.handleChangeAlbumGenre = this.handleChangeAlbumGenre.bind(this);
    this.handleChangeAlbumCover = this.handleChangeAlbumCover.bind(this);
    this.handleChangeAlbumPublisher = this.handleChangeAlbumPublisher.bind(this);
    this.handleChangeAlbumPlay = this.handleChangeAlbumPlay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeAlbumTitle(e) {
    this.setState({Title: e.target.value});
  }
  handleChangeAlbumArtist(e) {
    this.setState({Artist: e.target.value});
  }
  handleChangeAlbumArtistPhoto(e) {
    this.setState({ArtistPhoto: e.target.value});
  }
  handleChangeAlbumYear(e) {
    this.setState({Year: e.target.value});
  }
  handleChangeAlbumGenre(e) {
    this.setState({Genre: e.target.value});
  }
  handleChangeAlbumCover(e) {
    this.setState({Cover: e.target.value});
  }
  handleChangeAlbumPublisher(e) {
    this.setState({Publisher: e.target.value});
  }
  handleChangeAlbumPlay(e) {
    this.setState({Play: e.target.value});
  }

  handleSubmit(e) {
  
    e.preventDefault();

    const newAlbum = {
      title:this.state.Title,
      artist:this.state.Artist,
      artistPhoto:this.state.ArtistPhoto,
      year:this.state.Year,
      genre:this.state.Genre,
      cover:this.state.Cover,
      publisher:this.state.Publisher,
      play:this.state.Play
    }

    axios.post('http://localhost:4000/api/albums',newAlbum)
    .then()
    .catch();

    this.setState({
      Title:'',
      Artist:'',
      ArtistPhoto:'',
      Year:'',
      Genre:'',
      Cover:'',
      Publisher:'',
      Play:''
    });
    
    //this will redirect me to the read component after submit is clicked
    this.props.history.push('/albums')
    return  <Redirect  to="/albums" />
  }

  render(){
  return (
    <Card border="secondary" bg="dark" text="white">

    <div>
     <h1>Add Album to database</h1>
     <h3>Please enter the details of the album you wish to add to the mongoDB database</h3>
     <form onSubmit={this.handleSubmit}>
       
       <div className="form-group">
        <label>
          Album Title:
          <input 
          type="text" 
          value={this.state.Title} 
          className="form-control"
          onChange={this.handleChangeAlbumTitle} />
        </label>
        </div>

        <div className="form-group">
        <label>
          Album Artist:
          <input 
          type="text" 
          value={this.state.Artist} 
          className="form-control"
          onChange={this.handleChangeAlbumArtist} />
        </label>
        </div>

        <div className='form-group'>
          <label>Album Cover Image url:</label>
          <textarea 
          rows ="3"
          className = 'form-control'
          value={this.state.Cover}
          onChange={this.handleChangeAlbumCover}>
          </textarea>
        </div>

        <div className='form-group'>
          <label>Artist Image url:</label>
          <textarea 
          rows ="2"
          className = 'form-control'
          value={this.state.ArtistPhoto}
          onChange={this.handleChangeAlbumArtistPhoto}>
          </textarea>
        </div>

        <div className="form-group">
        <label>
          Album Year:
          <input 
          type="text" 
          value={this.state.Year} 
          className="form-control"
          onChange={this.handleChangeAlbumYear} />
        </label>
        </div>

        <div className="form-group">
        <label>
          Album Genre:
          <input 
          type="text" 
          value={this.state.Genre} 
          className="form-control"
          onChange={this.handleChangeAlbumGenre} />
        </label>
        </div>

        <div className="form-group">
        <label>
          Album Publisher:
          <input 
          type="text" 
          value={this.state.Publisher} 
          className="form-control"
          onChange={this.handleChangeAlbumPublisher} />
        </label>
        </div>

        <div className='form-group'>
          <label>Album Spotify/AppleMusic url:</label>
          <textarea 
          rows ="2"
          className = 'form-control'
          value={this.state.Play}
          onChange={this.handleChangeAlbumPlay}>
          </textarea>
        </div>

        <div>
        <Button type="submit" variant="outline-success" value="Submit">Submit</Button>
        <br></br>
        </div>

      </form>
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

    </Card>
    
  );
 }
}

export default Add;