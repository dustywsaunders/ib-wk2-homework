
import React from 'react';
import PropTypes from 'prop-types'
// import data from '../App'

export default function ModelDetails(props){
  return (
    
      <ul>
        <li className="name">Name: { }</li>
        <li className="manufacturer">Manufacturer: { }</li>
        <li className="year">Year: { }</li>
        <li className="origin">Origin: { }</li>
      </ul>
  )
}

ModelDetails.propTypes = {
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired
};

