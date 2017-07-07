import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel, Nav, NavItem, Button} from 'react-bootstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      index:0,
      direction:null
    }
    this.handleSelect=this.handleSelect.bind(this);
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render(){
    return(
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img width={1366} height={500} alt="1366x500" src="./img/1.jpg"/>
          <Carousel.Caption>
            <h4>LOREAN IPSUM DOLOR</h4>
            <h5>Aenean id liguam dolor tristique fringlina</h5>
            <div className="carousel-button">
              <a href="#" className="gallery-button"><span>START NOW</span></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1366} height={500} alt="900x500" src="/img/2.jpg"/>
          <Carousel.Caption>
            <h4>LOREAN IPSUM DOLOR</h4>
            <h5>Aenean id liguam dolor tristique fringlina</h5>
            <div className="carousel-button">
              <a href="#" className="gallery-button"><span>START NOW</span></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1366} height={500} alt="900x500" src="./img/3.jpg"/>
          <Carousel.Caption>
            <h4>LOREAN IPSUM DOLOR</h4>
            <h5>Aenean id liguam dolor tristique fringlina</h5>
            <div className="carousel-button">
              <a href="#" className="gallery-button"><span>START NOW</span></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1366} height={500} alt="900x500" src="./img/4.jpg"/>
          <Carousel.Caption>
            <h4>LOREAN IPSUM DOLOR</h4>
            <h5>Aenean id liguam dolor tristique fringlina</h5>
            <div className="carousel-button">
              <a href="#" className="gallery-button"><span>START NOW</span></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1366} height={500} alt="900x500" src="./img/5.jpg"/>
          <Carousel.Caption>
            <h4>LOREAN IPSUM DOLOR</h4>
            <h5>Aenean id liguam dolor tristique fringlina</h5>
            <div className="carousel-button">
              <a href="#" className="gallery-button"><span>START NOW</span></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
