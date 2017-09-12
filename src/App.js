import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Vanilla from './pages/vanilla';
import AddContent from './pages/addContent';

const App = () => (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Vanilla} />
            <Route path='/add-content' component={AddContent} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );

const NotFound = () => <center><h1>Page Not Found</h1></center>

export default App;
