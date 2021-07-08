import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainPage } from './pages/Main'
import { TablePage } from './pages/TablePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/table" component={TablePage} />
        <Route path="/" exact component={MainPage} />
        <Redirect path="/home" to="/" />
      </Switch>
    </div>
  );
}

export default App;
