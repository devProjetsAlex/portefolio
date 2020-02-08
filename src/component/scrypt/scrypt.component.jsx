import React, { Component } from 'react';
import Typical from 'react-typical'
import './scrypt.styles.scss'

class Scrypt extends Component {
    render() {
        return (
          
                 <Typical
                 className='scrypt'
                loop={1}
                wrapper="b"
                steps = {[
                    null,
                    1000,
                    'Bonjour',
                    2500,
                    'Bonjour mon nom est Alexandre',
                    1000,
                    "Je suis un programmeur",
                    1000,
                    "Je suis un programmeur : MERN Stack",
                    1000,
                    "MERN : Mango Db, Express Js, React Js/Native, Node Js",
                    2500,
                    "Je crée des applications pour PME",
                    1000,
                    '',
                    2500,
                    'Au plaisir de vous rencontrer!',
                    1500,
                    null,
                ]}
                />
            
        );
    }
}

export default Scrypt;