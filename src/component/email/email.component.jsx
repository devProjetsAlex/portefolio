import React, { Component } from 'react';
import Typical from 'react-typical'
import './email.styles.scss'

class Email extends Component {
   render() {
        return (
            <a className='email' href={`mailto:${"dev.projets.alex@gmail.com"}`}>          
                 <Typical
                loop={Infinity}
                steps = {[
                    null,
                    1000,
                     'dev-projets-alex@gmail.com',
                    1000,                   
                ]} />     
            </a>
       
        );
    }
}

export default Email;