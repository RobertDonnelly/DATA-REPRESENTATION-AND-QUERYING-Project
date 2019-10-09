import React from 'react';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {Title: '',
                  Year:'',
                  Poster:''};

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
    this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeMovieTitle(e) {
    this.setState({Title: e.target.value});
  }
  handleChangeMovieYear(e) {
    this.setState({Year: e.target.value});
  }

  handleChangeMoviePoster(e) {
    this.setState({Poster: e.target.value});
  }


  handleSubmit(e) {
    alert('Movie Title: ' + this.state.Title + 
               ', Year: ' + this.state.Year + 
              ', Poster:' + this.state.Poster);
    e.preventDefault();
  }

  render(){
  return (
    <div>
     <h1>Hello from Create Component</h1>
     <form onSubmit={this.handleSubmit}>
       
       <div className="form-group">
        <label>
          Movie Title:
          <input 
          type="text" 
          value={this.state.Title} 
          className="form-control"
          onChange={this.handleChangeMovieTitle} />
        </label>
        </div>
     
        <div className="form-group">
        <label>
          Movie Year:
          <input 
          type="text" 
          value={this.state.Year} 
          className="form-control"
          onChange={this.handleChangeMovieYear} />
        </label>
        </div>
        
        <div className='form-group'>
          <label>Movie Poster url:</label>
          <textarea 
          rows ="3"
          className = 'form-control'
          value={this.state.Poster}
          onChange={this.handleChangeMoviePoster}>
          </textarea>
        </div>

        <div>
        <input type="submit" value="Submit" />
        </div>

      </form>
    </div>
  );
 }
}

export default Create;