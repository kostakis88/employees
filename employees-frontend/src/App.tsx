import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import List from './components/List'

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path='/employees' component={List} />
        </Switch>  
      </Router>
    </div>
  );
};

export default App;
