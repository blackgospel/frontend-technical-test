import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import VehicleModal from '..';

describe('VehicleModal', () => {
  test('renders vehicle modal correctly', () => {
    const vehicle = {
      id: '123',
      name: 'Test Vehicle',
      description: 'This is a test vehicle',
      price: '£100,000',
      media: {
        name: 'Test Image',
        url: 'test-image.jpg',
      },
      emissions: 'Low',
      passengerCapacity: 5,
    };

    render(<VehicleModal vehicle={vehicle} open onRequestClose={jest.fn()} />);

    expect(screen.getByText('Test Vehicle')).toBeInTheDocument();
    expect(screen.getByText('Emissions: Low')).toBeInTheDocument();
    expect(screen.getByText('Passenger Capacity: 5')).toBeInTheDocument();
  });

  test('closes modal when close button is clicked', () => {
    const vehicle = {
      id: '123',
      name: 'Test Vehicle',
      description: 'This is a test vehicle',
      price: '£100,000',
      media: {
        name: 'Test Image',
        url: 'test-image.jpg',
      },
      emissions: 'Low',
      passengerCapacity: 5,
    };

    const handleClose = jest.fn();

    render(<VehicleModal vehicle={vehicle} open onRequestClose={handleClose} />);

    fireEvent.click(screen.getByLabelText('Close Modal'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
