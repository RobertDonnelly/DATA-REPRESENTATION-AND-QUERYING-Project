import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';


export class AlbumItem extends React.Component {
    constructor() {
        super();
        this.DeleteAlbum = this.DeleteAlbum.bind(this);
    }
    DeleteAlbum(e) {
        console.log("Delete button clicked");
        axios.delete('http://localhost:4000/api/albums/' + this.props.album._id)
        .then(window.location.reload())//refresh page after deleting
        .catch();
    }
    render() {
        return (<div>
            <Card>
                
            </Card>
            <Card border="success" bg="dark" text="white">
                <Card.Header>
                <a href={this.props.album.play} className="btn btn-outline-success"><h2>{this.props.album.title}</h2></a>
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                    <Carousel>
  <Carousel.Item>
    <img
      width="300"
      height="300"
      src={this.props.album.cover}
      alt="Cover Photo"/>  
  </Carousel.Item>
  <Carousel.Item>
  <Image src={this.props.album.artistPhoto} roundedCircle 
    height="300"
    width="300"
    alt="Artist Photo"/>  
  </Carousel.Item>
  </Carousel>
                        <br></br>
                      Artist:  {this.props.album.artist}
                    </p>
                    <p>
                      Year released:  {this.props.album.year}
                    </p>
                    <p>
                       Genre: {this.props.album.genre}
                    </p>
                    <p>
                     Publisher: {this.props.album.publisher}
                    </p>    
                    </blockquote>
                </Card.Body>
                </Card>
                <Card  border="secondary" bg="dark" text="white" width={28}>
                <Button variant="dark" variant="outline-danger" onClick={this.DeleteAlbum}>Delete</Button>
                <Link to={"/edit/" + this.props.album._id} className="btn btn-outline-success">Edit</Link>
            </Card>
        </div>);
    }
}

export default AlbumItem;