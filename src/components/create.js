import React from 'react';
import axios from 'axios';
import { watchFile } from 'fs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Create extends React.Component {

  //album title
  //artist
  //year
  //genre
  //coverphoto
  //publisher

  constructor(props) {
    super(props);
    this.state = {Title: '',
                  Artist:'',
                  Year:'',
                  Genre:'',
                  Cover:'',
                  Publisher:''};

    this.handleChangeAlbumTitle = this.handleChangeAlbumTitle.bind(this);
    this.handleChangeAlbumArtist = this.handleChangeAlbumArtist.bind(this);
    this.handleChangeAlbumYear = this.handleChangeAlbumYear.bind(this);
    this.handleChangeAlbumGenre = this.handleChangeAlbumGenre.bind(this);
    this.handleChangeAlbumCover = this.handleChangeAlbumCover.bind(this);
    this.handleChangeAlbumPublisher = this.handleChangeAlbumPublisher.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeAlbumTitle(e) {
    this.setState({Title: e.target.value});
  }
  handleChangeAlbumArtist(e) {
    this.setState({Artist: e.target.value});
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

  handleSubmit(e) {
  
    e.preventDefault();

    const newAlbum = {
      title:this.state.Title,
      artist:this.state.Artist,
      year:this.state.Year,
      genre:this.state.Genre,
      cover:this.state.Cover,
      publisher:this.state.Publisher

    }

    axios.post('http://localhost:4000/api/albums',newAlbum)
    .then()
    .catch();

    this.setState({
      Title:'',
      Artist:'',
      Year:'',
      Genre:'',
      Cover:'',
      Publisher:''
    });
    this.props.history.push('/albums')
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
        
        <div className='form-group'>
          <label>Album Cover Image url:</label>
          <textarea 
          rows ="3"
          className = 'form-control'
          value={this.state.Cover}
          onChange={this.handleChangeAlbumCover}>
          </textarea>
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

        <div>
        <Button type="submit" variant="outline-primary" value="Submit">Submit</Button>
        <br></br>
        </div>

      </form>
    </div>
    </Card>
  );
 }
}

export default Create;