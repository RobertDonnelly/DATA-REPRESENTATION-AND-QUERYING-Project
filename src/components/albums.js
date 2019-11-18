import React from 'react';
import AlbumItem from "./albumItem";

class Albums extends React.Component {

  render(){
  return this.props.myAlbums.map((album)=>{
    console.log(album);
  return <AlbumItem album={album}></AlbumItem>
  }); 
}
}

export default Albums;