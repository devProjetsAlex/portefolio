import React, { Component } from 'react';

class EmailLink extends Component {
    render() {
        return (
            <div href={`mailto:${"dev.projets.alex@gmail.com"}`}>
                dev.projets.alex@gmail.com
            </div>
        );
    }
}

export default EmailLink;