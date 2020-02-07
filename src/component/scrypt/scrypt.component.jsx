import React, { Component } from 'react';
import Typical from 'react-typical'
import './scrypt.styles.scss'

class Scrypt extends Component {
    render() {
        return (
            <div className='scrypt'>
                 <Typical
                loop={Infinity}
                wrapper="b"
                steps = {[
                    null,
                    5000,
                    'Bonjour mon nom est Alexandre',
                    1000,
                    "Je suis un programmeur Front-End",
                    1000,
                    'Je me spécialise en application web et mobile',
                    1000,
                    '',
                    5000,
                    'Au plaisir de vous rencontrer!',
                    50000000
                ]}
                />
            </div>
        );
    }
}

export default Scrypt;