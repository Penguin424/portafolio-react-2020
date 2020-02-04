import React from 'react';

import {Switch, BrowserRouter, Route} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../component/Layout';

import '../assets/styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sobre_mi" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;