import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

class Content extends React.Component {
 
 render(){
  return (
    <div className="App">
     <Card  border="secondary" bg="dark" text="success">
      <Card.Header>
        <h1>Hello</h1>
     
    <Carousel>
  <Carousel.Item>
    <img
      width="500"
      height="500"
      src="http://3.bp.blogspot.com/_6lV5hzNR1fU/Swq1H8DvqOI/AAAAAAAAHVE/bvtVFLvq18c/s1600/Justin%252Btimberlake%252Blosing%252Bmy%252Bway%252Bcover%252Bby%252Bjustcdcover.blogspot.com.jpeg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="700"
      height="500"
      src="https://i.etsystatic.com/19030452/r/il/106206/1754228863/il_570xN.1754228863_1x41.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="700"
      height="500"
      src="https://consequenceofsound.net/wp-content/uploads/2015/02/screen-shot-2015-02-12-at-1-14-39-pm.png?w=807"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</Card.Header>
    </Card> 
    </div>
  );
}
}

export default Content;
    
