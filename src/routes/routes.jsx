import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Index from '../pages/index';

export default props => (
  <Router>
    <Route exact path='/' component={Index} />
  </Router>
)