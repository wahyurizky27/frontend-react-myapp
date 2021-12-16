import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Overview from './components/overview/Overview'
import Detail from './components/details/Detail'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Overview} exact/>
        <Route path="/company/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
