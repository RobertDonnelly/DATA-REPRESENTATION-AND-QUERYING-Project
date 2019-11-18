import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class AlbumItem extends React.Component {
    constructor() {
        super();
        this.DeleteAlbum = this.DeleteAlbum.bind(this);
    }
    DeleteAlbum(e) {
        console.log("Delete button clicked");
        axios.delete('http://localhost:4000/api/albums/' + this.props.album._id)
            .then()
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
                        <footer className="blockquote-footer">
                            <img height="300" width="300" src={this.props.album.cover}></img>
                        </footer>
                    <p>
                     Publisher: {this.props.album.publisher}
                    </p>    
                    </blockquote>
                </Card.Body>
                <Button variant="danger" onClick={this.DeleteAlbum} size="sm">Delete</Button>
                <Link to={"/edit/" + this.props.album._id} className="btn btn-primary">Edit</Link>
            </Card>
        </div>);
    }
}

export default AlbumItem;
