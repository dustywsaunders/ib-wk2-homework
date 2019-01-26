
import React from 'react';
// import PropTypes from 'prop-types';

export default function ModelDetails(props){
  return (
      <ul>
        <li className="name">Name: { props.model.model }</li>
        <li className="manufacturer">Manufacturer: { props.model.manufacturer }</li>
        <li className="year">Year: { props.model.year }</li>
        <li className="origin">Origin: { props.model.origin }</li>
      </ul>
  )
};

// I COULD NOT GET THE PROPTYPES TO WORK AND KEPT GIVING ME ERRORS IN CONSOLE (PROPTYPE IS UNDEFINED), SO I COMMENTED THEM OUT FOR NOW
//
// ModelDetails.propTypes = {
//   model: PropTypes.string.isRequired,
//   manufacturer: PropTypes.string.isRequired,
//   year: PropTypes.number.isRequired,
//   origin: PropTypes.string.isRequired
// };