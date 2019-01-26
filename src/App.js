import React, { Component } from 'react';
import './App.css';
import { addModel } from './actions/addModel'
import { connect } from 'react-redux';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {

  state = {}
  
  updateSelection = (event) => {
    this.setState({
      model: event.target.value
    }) 
  };

  addModel = () => {
    const name = this.state.model
    const manufacturer = data[this.state.model].manufacturer
    const year = data[this.state.model].year
    const origin = data[this.state.model].origin
    this.props.addModel(name, manufacturer, year, origin)
  };

  render() {
    console.log(data);
    
    console.log(this.state)
    return (
      <div className="App">
        <select onChange={this.updateSelection} value={this.state.value}>
          <option value="">--Pick a Model--</option>
          {
            Object.entries(data).map( el => 
              <option key={ el[0] } value={ el[0] }> {el[0]} ({el[1].year}) </option>)
          }
        </select>
        <button onClick={() => this.addModel()}>Add Model</button>
      </div>
    )
  };
  
};

export default connect(null, { addModel })(App)

