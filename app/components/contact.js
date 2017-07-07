import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Thumbnail} from 'react-bootstrap';


export default class Contact extends React.Component{
  constructor(props) {
      super(props)
  }

  render(){
    return(
      <div className='container-fluid contact'>
      <Row>
        <Col xsHidden smHidden md={1} lg={1}></Col>
        <Col xs={12} sm={12} md={10} lg={10}>
          <Row>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div>
                <span className='company-about'>TRISTIQUE</span>
              </div>
              <span className='company-title'>CONTACT</span>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className='contact-adress'>
                <span className="fa-stack fa-lg fa-2x">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                </span>
                <span>2619 Old Ford Rd<br/>Ford Washington, PA19034</span>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className='contact-adress'>
              <span className="fa-stack fa-lg fa-2x">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
              </span>
              <span className='tel-email'>610-516-0418</span>
            </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className='contact-adress'>
                <span className="fa-stack fa-lg fa-2x">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-at fa-stack-1x fa-inverse"></i>
                </span>
                <span className='tel-email'>lalyout.02@gmail.com</span>
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
