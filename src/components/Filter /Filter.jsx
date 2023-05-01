import React from 'react';
import PropTypes from 'prop-types';

export function Filter({ handleChange, value }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        name="filter"
        type="text"
        value={value}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
}
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
