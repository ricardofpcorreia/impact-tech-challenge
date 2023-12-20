
import React from 'react';

const BeerGrid = ({ beers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {beers.map(beer => (
        <div key={beer.id} className="p-4 border rounded">
          <h3 className="text-lg font-bold">{beer.name}</h3>
          <p>{beer.description}</p>
          {/* Add more details here */}
        </div>
      ))}
    </div>
  );
};

export default BeerGrid;
