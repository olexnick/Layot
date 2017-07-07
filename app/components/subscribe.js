import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Button} from 'react-bootstrap';


export default class Subscribe extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className='container-fluid subscribe'>
      <Row>
        <Col xsHidden smHidden md={1} lg={1}></Col>
        <Col xs={12} sm={12} md={10} lg={10}>
          <div className='subscribe-text'>
            <span>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT?</span><br/>
            <span>Cras ac tortor hendrerit, tristigue elit sed, placerat justo.</span>
          </div>
          <div className='subscribe-button'>
            <Button >SUBSCRIBE NOW</Button>
          </div>
        </Col>
        <Col xsHidden smHidden md={1} lg={1}></Col>
      </Row>
    </div>
    )
  }
}
