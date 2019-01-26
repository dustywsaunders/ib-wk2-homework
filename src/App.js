import React, { Component } from 'react';
import './App.css';

const data = [
  {
    model: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    model: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    model: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    model: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends Component {

  state = {}

  render() {
    return (
      <div className="App">
        <select>
          <option value="">--Pick a model--</option>
          { 
            data.map( index => 
            <option key={ index.model } value={ index.model }>{ `${index.model} (${index.year})` }</option>)
          }
        </select>
      </div>
    );
  }
}

export default App;


