import React, { Component } from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import Scrypt from './component/scrypt/scrypt.component'
import Email from './component/email/email.component'

class App extends Component {
  render() {
    return (   
      <>           
      <HomePage/>>          
      <Scrypt/>
      <Email/>
      </>
    );
  }
}

export default App;