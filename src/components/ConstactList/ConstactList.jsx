import React from 'react';

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
