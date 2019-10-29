import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>SuperSquad</h2>
        <div className="col-md-6">
          <CharacterList />
        </div>
        <HeroList />
      </div>
    );
  }
}

export default App;
