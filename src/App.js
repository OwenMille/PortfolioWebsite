import React from 'react';
import './Styles/App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import StatementPage from './pages/statement';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/statement' component={StatementPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
