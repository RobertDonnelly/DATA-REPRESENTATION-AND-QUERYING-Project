import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

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
            <Card border="secondary" bg="dark" text="white">
                <Card.Header><h2>{this.props.album.title}</h2></Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                      Artist:  {this.props.album.artist}
                    </p>
                    <p>
                      Year released:  {this.props.album.year}
                    </p>
                    <p>
                       Genre: {this.props.album.genre}
                    </p>
                       <img height="300" width="300" src={this.props.album.cover}></img>
                     <Image src={this.props.album.cover} roundedCircle height="400" width="400"></Image>

                    <p>
                     Publisher: {this.props.album.publisher}
                    </p>    
                    </blockquote>
                </Card.Body>
                <Button variant="dark" variant="outline-danger" onClick={this.DeleteAlbum}>Delete</Button>
                <Link to={"/edit/" + this.props.album._id} className="btn btn-outline-primary">Edit</Link>
            </Card>
        </div>);
    }
}

export default AlbumItem;
