import React from 'react';
import VehicleItem from '../VehicleItem';
import './style.scss';
import useData from './useData';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  return (
    <div className="vehicle-list" data-testid="vehicle-list">
      {vehicles.map((vehicle, index) => (
        <VehicleItem key={vehicle.id} vehicle={vehicle} index={index} />
      ))}
    </div>
  );
}
