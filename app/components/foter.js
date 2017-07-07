import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Thumbnail} from 'react-bootstrap';


export default class Foter extends React.Component{
  constructor(props) {
      super(props)
  }

  render(){
    return(
      <div className='container-fluid foter'>
      <Row>
        <Col xsHidden smHidden md={1} lg={1}></Col>
        <Col xs={12} sm={12} md={10} lg={10}>
          <Row>
            <Col xs={6} sm={12} md={4} lg={4}>
               <span>Copyright 2016 Layout 02</span>
            </Col>
            <Col xs={6} sm={12} md={4} lg={4}>
              <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="https://twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              <a href="https://www.pinterest.com"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
              <a href="https://plus.google.com"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="policy">
              <a href="#">Privacy Policy |</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
            </Col>
          </Row>
        </Col>
        <Col xsHidden smHidden md={1} lg={1}></Col>
      </Row>
    </div>
    )
  }
}
