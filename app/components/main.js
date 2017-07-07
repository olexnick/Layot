import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from '../store/store.js';
import {Router} from 'react-router';
import {Route} from 'react-router-dom';

import Navigation from './navigation.js';
import SlideShow from './slideShow.js';
import About from './about.js';
import Services from './services.js';
import Subscribe from './subscribe.js';
import Works from './works.js';
import Contact from './contact.js';
import Map from './map.js';
import Foter from './foter.js';


class App extends React.Component {
  constructor(props) {
      super(props)
  }


  render(){
    return(
      <div>
        <Navigation/>
        <SlideShow/>
        <About/>
        <Services/>
        <Subscribe/>
        <Works/>
        <Contact/>
        <Map/>
        <Foter/>
      </div>
    )
  }
}

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
),document.getElementById('app'));
