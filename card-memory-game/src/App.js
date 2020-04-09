import React from 'react';
import './App.css';
import CardsPanel from './components/CardsPanel';

function App() {
  return (
    <div className="App">          
        <div className='container'>
          <CardsPanel className='panel'></CardsPanel>
        </div>      
    </div>
  );
}

export default App;
