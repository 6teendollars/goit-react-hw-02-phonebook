import React from 'react';
import PropTypes from 'prop-types';

export function ConstactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(constact => {
        return (
          <li key={constact.id}>
            <span>{constact.name}</span> :<span>{constact.number}</span>
            <button onClick={() => deleteContact(constact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
ConstactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
