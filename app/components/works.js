import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Thumbnail} from 'react-bootstrap';


export default class Works extends React.Component{
  constructor(props) {
      super(props)
  }

  render(){
    return(
      <div className='container-fluid'>
      <Row>
        <Col xsHidden smHidden md={1} lg={1}></Col>
        <Col xs={12} sm={12} md={10} lg={10}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <span className='company-about'>MORBI RHONCUS</span>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <span className='company-title'>OUR WORKS</span>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Thumbnail href="#" src='./img/works1.jpg' className='works-img'>
                <div className="category">
                    <span className="category-top" >UT PRETIUM LEO VEL</span><br/>
                    <span className="category-botton">Category</span>
                </div>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Thumbnail href="#" src='./img/works2.jpg' className='works-img'>
                <div className="category">
                    <span className="category-top" >UT PRETIUM LEO VEL</span><br/>
                    <span className="category-botton">Category</span>
                </div>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Thumbnail href="#" src='./img/works3.jpg' className='works-img'>
                <div className="category">
                    <span className="category-top" >UT PRETIUM LEO VEL</span><br/>
                    <span className="category-botton">Category</span>
                </div>
              </Thumbnail>
            </Col>
          </Row>
          <Row className='center'>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Thumbnail href="#" src='./img/works4.jpg' className='works-img'>
                <div className="category">
                    <span className="category-top" >UT PRETIUM LEO VEL</span><br/>
                    <span className="category-botton">Category</span>
                </div>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Thumbnail href="#" src='./img/works5.jpg' className='works-img'>
                <div className="category">
                    <span className="category-top" >UT PRETIUM LEO VEL</span><br/>
                    <span className="category-botton">Category</span>
                </div>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Thumbnail href="#" src='./img/works6.jpg' className='works-img'>
                <div className="category">
                    <span className="category-top" >UT PRETIUM LEO VEL</span><br/>
                    <span className="category-botton">Category</span>
                </div>
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
