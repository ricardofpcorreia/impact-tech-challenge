
import React from 'react';
import Layout from '../app/components/Layout';
import BeerGrid from '../app/components/BeerGrid';

const beers = [
  // Example data - replace with actual data fetching
  { id: 1, name: 'Beer 1', description: 'Description 1' },
  { id: 2, name: 'Beer 2', description: 'Description 2' },
  // Add more beers here
];

export default function Home() {
  return (
    <Layout>
      <BeerGrid beers={beers} />
    </Layout>
  );
}
