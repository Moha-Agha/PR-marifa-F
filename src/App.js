import React, { Fragment } from 'react';
import "./theme/App.scss";

import Nav from './shared/nav/Nav';
import FloatNav from './shared/floatNav/FloatNav';
import Footer from './shared/footer/Footer';

import Routing from './routing/Routing';

const App = () => {

  return (
  <Fragment>
          <FloatNav/>
          <Nav/>
          <Routing/>
          <Footer/>
  </Fragment>
  );   
};

export default App;
