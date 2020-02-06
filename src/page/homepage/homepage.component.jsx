import React, { Component } from 'react';
import './homepage.styles.scss'
import Particles from 'react-particles-js'
import {particlesOpt} from '../../component/particles/particles.component'

class HomePage extends Component {
  render() {
    return (     
       <Particles className='background-image' params={particlesOpt} ></Particles>        
    );
  }
}

export default HomePage;