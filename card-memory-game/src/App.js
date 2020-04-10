import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'

import { Home } from './pages/Home'
import { ConfigGame } from './pages/ConfigGame'
import { Game } from './pages/Game'

function App() {
  return (
    <Container fluid className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/configgame' component={ConfigGame} />
        <Route exact path='/game/:theme/:rows/:cols' component={Game} />
      </Switch>
    </Container>
  );
}

export default App;
