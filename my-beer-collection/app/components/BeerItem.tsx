
import React from 'react';

const BeerItem = ({ beer }) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="text-lg font-bold">{beer.name}</h3>
      <p>{beer.description}</p>
      {/* Additional beer details */}
    </div>
  );
};

export default BeerItem;
