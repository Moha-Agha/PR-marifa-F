import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageNotFound from '../screens/others/PageNotFound/PageNotFound';

import Home from '../screens/home/Home';




const Routing = () => {


  return (
    <Router>

      <Switch>
        <Route exact path='/' component={Home} />
        
        <Route path='*' component={PageNotFound} />
      </Switch>

    </Router>
  );
};

export default Routing;
