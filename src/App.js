import React, { Component } from 'react';
import './App.css';
import { addModel } from './actions/addModel'
import { connect } from 'react-redux';
import ModelDetailsContainer from './components/modelDetailContainer';

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
  
  addModel = () => {
    const model = this.state.value
    const manufacturer = data[`${model}`].manufacturer
    const year = data[`${model}`].year
    const origin = data[`${model}`].origin
    this.props.addModel(model, manufacturer, year, origin)
  };

  updateSelection = (event) => {
    this.setState({
      value: event.target.value
    }) 
  };

  render() { 
    console.log(this.state);  
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
        <ModelDetailsContainer />
      </div>
    )
  };
};

const mapStateToProps = state => {
  return { 
    models: state.models

  }
};

export default connect(mapStateToProps,{ addModel })(App, data);


