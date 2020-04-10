import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//import { Home, ConfigGame, Game } from './pages/'
import { Home } from './pages/Home'
import { ConfigGame } from './pages/ConfigGame'
import { Game } from './pages/Game'

function App() {
  return (
    <div className="App container">                  
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/configgame' component={ConfigGame} />
            <Route exact path='/game/:theme/:rows/:cols' component={Game} />          
          </Switch>        
    </div>
  );
}

export default App;
