import React from 'react';

export function Filter({ handleChange, value }) {
  return (
    <div>
      <input name="filter" type="text" value={value} onChange={handleChange} />
    </div>
  );
}
