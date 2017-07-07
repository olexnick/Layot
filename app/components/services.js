import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Thumbnail} from 'react-bootstrap';


export default class Services extends React.Component{
  constructor(props) {
      super(props)
  }

  render(){
    return(
      <div className='container-fluid servise-top'>
      <Row>
        <Col xsHidden smHidden md={1} lg={1}></Col>
        <Col xs={12} sm={12} md={10} lg={10}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <span className='company-about'>LOREM IPSUM</span>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <span className='company-title'>OUR SERVICES</span>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <Thumbnail href="#" className="servise">
                <img src="./img/img-services1.jpg" alt="..." />
                <span className="servise-title">SOME SERVICES</span>
                <span className="servise-coment">Sed orcl nibh, rhoncus ut tellus guis, sodales ornare arcu. Pellentesque rutrum tellus ut mauris scelerisque</span>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <Thumbnail href="#" className="servise">
                <img src="./img/img-services2.jpg" alt="..." />
                <span className="servise-title">SOME SERVICES</span>
                <span className="servise-coment">Sed orcl nibh, rhoncus ut tellus guis, sodales ornare arcu. Pellentesque rutrum tellus ut mauris scelerisque</span>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <Thumbnail href="#" className="servise">
                <img src="./img/img-services3.jpg" alt="..." />
                <span className="servise-title">SOME SERVICES</span>
                <span className="servise-coment">Sed orcl nibh, rhoncus ut tellus guis, sodales ornare arcu. Pellentesque rutrum tellus ut mauris scelerisque</span>
              </Thumbnail>
            </Col>
          </Row>
          <Row className='center'>
            <Col xs={12} sm={4} md={4} lg={4}>
              <Thumbnail href="#" className="servise">
                <img src="./img/img-services4.jpg" alt="..." />
                <span className="servise-title">SOME SERVICES</span>
                <span className="servise-coment">Sed orcl nibh, rhoncus ut tellus guis, sodales ornare arcu. Pellentesque rutrum tellus ut mauris scelerisque</span>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <Thumbnail href="#" className="servise">
                <img src="./img/img-services5.jpg" alt="..." />
                <span className="servise-title">SOME SERVICES</span>
                <span className="servise-coment">Sed orcl nibh, rhoncus ut tellus guis, sodales ornare arcu. Pellentesque rutrum tellus ut mauris scelerisque</span>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <Thumbnail href="#" className="servise">
                <img src="./img/img-services6.jpg" alt="..." />
                <span className="servise-title">SOME SERVICES</span>
                <span className="servise-coment">Sed orcl nibh, rhoncus ut tellus guis, sodales ornare arcu. Pellentesque rutrum tellus ut mauris scelerisque</span>
              </Thumbnail>
            </Col>
          </Row>
        </Col>
        <Col xsHidden smHidden md={1} lg={1}></Col>
      </Row>
    </div>
    )
  }
}
