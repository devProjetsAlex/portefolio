import React, { Component } from 'react';
import Typical from 'react-typical'
import './ecommerce.styles.scss'

class Ecommerce extends Component {
   render() {
        return (
            <a className='ecommerce' href="https://e-com-demo-alex.herokuapp.com/">          
                 <Typical
                loop={Infinity}
                steps = {[
                    null,
                    1000,
                     'Site demo de E-Commerce',
                    1000,                   
                ]} />     
            </a>
            
       
        );
    }
}

export default Ecommerce;