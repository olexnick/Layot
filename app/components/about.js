import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';


import {ShoweHiden} from '../actions/actions.js'


 class About extends React.Component{
  constructor(props) {
      super(props)
      this.ShoweHiden=this.ShoweHiden.bind(this);
  }

ShoweHiden(val){
  let stateTab = this.props.projectReducer.tab
  if(val===stateTab){
    this.props.dispatch(ShoweHiden('none'))
  } else if (val!==stateTab){
    this.props.dispatch(ShoweHiden(val))
  }
}


  render(){
    let disp ={
      display:this.props.projectReducer.tab
    }
    return(
      <div className='container-fluid'>
      <Row>
        <Col xsHidden smHidden md={1} lg={1}></Col>
        <Col xs={12} sm={12} md={10} lg={10}>
          <span className="company-about">DONEC TRISTIQUE RUTRUM</span>
          <span className="company-title">ABOUT COMPANY</span>
          <span className="company-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida orci in risus commodo, quis varius dui ullamcorper. Nullam et blandit erat. Aliquam in ante ante. Duis interdum imperdiet diam non elementum. Mauris bibendum elit vel quam condimentum euismod. Cras at vehicula tellus. Duis non ornare enim. Aliquam erat volutpat. Mauris egestas, magna at lacinia convallis, turpis velit euismod massa, ut tempor dolor dui id ante. Vestibulum eu cursus libero, vitae faucibus odio. Suspendisse sodales nec enim id convallis. Duis facilisis, urna in hendrerit convallis, nunc augue venenatis sem, id efficitur risus leo vitae urna. Nulla lobortis sagittis augue quis tincidunt. Phasellus semper id ipsum et sollicitudin.</p>
            <p>Morbi at eros eu mi malesuada posuere. Mauris eget lorem vitae lorem sodales hendrerit sit amet quis tellus. Nam bibendum eros dui, lacinia ullamcorper neque pellentesque in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce accumsan purus vitae odio condimentum malesuada. Cras eleifend nisi sit amet ipsum vehicula pharetra. Donec ultricies odio id ante porta, sed posuere elit posuere. Cras erat magna, bibendum eget justo nec, mattis pellentesque felis. Ut interdum non sem eget pharetra. Vestibulum velit lacus, consequat non sem at, pretium volutpat turpis. Aenean sodales congue enim ac porttitor. Vestibulum quis tincidunt velit, vel interdum augue. Donec quis nisl sit amet felis tristique suscipit. Integer lectus enim, molestie eu ultrices at, pulvinar id lorem. Nulla consectetur nisl dui, vitae convallis dui hendrerit vitae.</p>
          </span>
          <div id="box" style={{display: disp.display}}>
            <span className="company-text">
              <p>Duis non consequat nulla. Praesent scelerisque augue eros, euismod aliquam libero porttitor sit amet. Quisque elementum justo lacus, ac sagittis lorem finibus id. Aenean nibh ante, maximus vulputate dapibus sed, accumsan ac enim. Donec sodales placerat odio eget aliquam. Quisque nec leo non nibh tincidunt sagittis vel at arcu. Fusce at nisi in enim consequat convallis. Morbi non arcu urna. Aenean id purus malesuada, eleifend dolor et, facilisis eros. Donec eu porta massa. Aenean finibus massa sit amet arcu accumsan, eget pretium ante varius.
              Mauris semper quam id magna bibendum, ac luctus tortor mollis. Fusce elementum turpis orci, non malesuada est commodo et. Ut gravida ex at diam suscipit, vulputate consequat turpis eleifend. Nullam pulvinar, erat nec efficitur dignissim, magna risus viverra ex, sit amet sagittis ipsum nunc vel purus. Nunc fermentum erat felis, ut lobortis velit sodales eget. Aliquam blandit bibendum nisl, nec viverra est accumsan sit amet. Donec in ornare orci, maximus varius urna. Aenean volutpat, felis sit amet lacinia ultrices, sem nulla mattis ipsum, vel iaculis nisi felis quis ex. Phasellus tincidunt auctor consequat. Aenean eleifend ullamcorper lorem nec cursus. Nulla vitae turpis id nunc congue rhoncus ac sed nulla. Nulla nec semper erat, at faucibus mauris. Nam vitae bibendum ipsum, vitae dignissim lorem. Vestibulum ornare urna a faucibus efficitur. Donec pulvinar, augue id volutpat gravida, massa dolor blandit leo, pharetra feugiat quam est in erat.
              Etiam lacinia nisi a sem vulputate efficitur. Donec at velit sapien. Duis ipsum elit, placerat eget sapien ac, tincidunt euismod tellus. Donec sed tristique tortor. Donec aliquet a leo a tristique. Integer tincidunt, sapien eu fermentum malesuada, arcu turpis tempus erat, vel interdum erat metus vel purus. Etiam sed nibh nulla. Vestibulum in turpis et felis semper laoreet a et sem.</p>
            </span>
          </div>
          <div className="text-button">
            <button  id="toggler" onClick={this.ShoweHiden.bind(this,'block')}>READ MORE</button>
          </div>
        </Col>
        <Col xsHidden smHidden md={1} lg={1}></Col>
      </Row>
    </div>
    )
  }
}

export default connect(function(store) {
   	return {
   		projectReducer: store
   	}
   })(About);
