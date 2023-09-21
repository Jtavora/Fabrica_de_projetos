import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Card">
        <div className="Card-inner">
        <img
            src={require('./image.png').default}
            className="Card-image"
          />

          <div className="Card-info">
            <h2>CJ</h2>
            <p>Piloto</p>
            <p>San Andreas</p>
            <p>Email: cj@GTA.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
