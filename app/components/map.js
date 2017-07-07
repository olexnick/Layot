import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Thumbnail} from 'react-bootstrap';


export default class Contact extends React.Component{
  constructor(props) {
      super(props)
  }

  render(){
    let widthMap ={
      default:screen.width
    };
    return(
      <div className='container-fluid map-wraper'>
          <Col xs={12} sm={12} md={12} lg={12} className='map'>
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12230.661511043774!2d-75.0951768365818!3d39.97123355147114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1486754150992"  frameBorder="0" style={{border:0}} style={{width: widthMap.default}} allowFullScreen></iframe>
              </div>
          </Col>
      </div>
    )
  }
}
