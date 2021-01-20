import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import List from './components/List'
import CreateEmployee from './components/CreateEmployee'
import UpdateEmployee from './components/UpdateEmployee';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path='/' exact component={List} />
          <Route path='/employees' component={List} />
          <Route path='/add-employee' component={CreateEmployee} />
          <Route path='/update-employee/:id' component={UpdateEmployee} />
        </Switch>  
      </Router>
    </div>
  );
};

export default App;
