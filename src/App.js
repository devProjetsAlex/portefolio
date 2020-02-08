import React, { Component } from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import Scrypt from './component/scrypt/scrypt.component'
import Email from './component/email/email.component'
import {ReactComponent as Logo} from './logo.svg'
import Ecommerce from './component/ecommerce/ecommerce.component'

class App extends Component {
  render() {
    return (   
      <>           
      <HomePage/>
      <Logo className='logo' />         
      <Scrypt/>
      <Email/>
      <Ecommerce/>
      </>
    );
  }
}

export default App;