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

    const selection = event.target.value
    
    this.setState({
      model: selection
    });    
  }

  addModel = () => {
    this.props.addModel(this.state.model)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <select onChange={ this.updateSelection } value={ this.state.value }>
          <option value="">--Pick a model--</option>
            <option key={ Object.keys(data)[0] } value={ Object.keys(data)[0] }>{ `${Object.keys(data)[0]} (${Object.values(data)[0].year})` }</option>)
            <option key={ Object.keys(data)[1] } value={ Object.keys(data)[1] }>{ `${Object.keys(data)[1]} (${Object.values(data)[1].year})` }</option>)
            <option key={ Object.keys(data)[2] } value={ Object.keys(data)[2] }>{ `${Object.keys(data)[2]} (${Object.values(data)[2].year})` }</option>)
            <option key={ Object.keys(data)[3] } value={ Object.keys(data)[3] }>{ `${Object.keys(data)[3]} (${Object.values(data)[3].year})` }</option>)
        </select>
        <button onClick={() => this.addModel()}>Add Model</button>
      </div>
    );
  }
  
}

export default connect(null, { addModel })(App)
