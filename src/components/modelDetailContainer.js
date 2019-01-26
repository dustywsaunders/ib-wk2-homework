
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ModelDetails from './modelDetails';

class ModelDetailsContainer extends Component {
  render () {
    return (
      <div>
        {this.props.models.map((model, index) => {
          return <ModelDetails key={index} model={model} />;
        })}
      </div>
    )
  } 
};

const mapStateToProps = state => {
  return {
    models: state
  }
};

export default connect(mapStateToProps)(ModelDetailsContainer)