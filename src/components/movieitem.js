import React from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends React.Component {

    render() {
        return (
            <div>
    {/* <h4>{this.props.movie.Title}</h4>
     <h5>{this.props.movie.Year}</h5>
     <img src ={this.props.movie.Poster}></img> */}
                <Card  border="primary">
                    <Card.Header  >{this.props.movie.Title}</Card.Header>
                    <Card.Body >
                      <blockquote className="blockquote mb-0">
                         <p>
                            {this.props.movie.Year}
                         </p>
                            <footer className="blockquote-footer">
                            <img src ={this.props.movie.Poster}></img> 
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MovieItem;