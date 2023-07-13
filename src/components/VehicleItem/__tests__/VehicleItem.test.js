import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import VehicleItem from '..';

jest.mock('../useData');
describe('<VehicleItem /> Tests', () => {
  test('renders vehicle item correctly', () => {
    const vehicle = {
      id: '123',
      name: 'Test Vehicle',
      description: 'This is a test vehicle',
      price: '£100,000',
      media: {
        name: 'Test Image',
        url: 'test-image.jpg',
      },
    };

    render(<VehicleItem vehicle={vehicle} index={0} />);

    const vehicleItem = screen.getByRole('button');
    expect(vehicleItem).toBeInTheDocument();

    expect(screen.getByText('Test Vehicle')).toBeInTheDocument();
    expect(screen.getByText('This is a test vehicle')).toBeInTheDocument();
    expect(screen.getByText('£100,000')).toBeInTheDocument();
  });

  test('opens modal when clicked', () => {
    const vehicle = {
      id: '123',
      name: 'Test Vehicle',
      description: 'This is a test vehicle',
      price: '£100,000',
      media: {
        name: 'Test Image',
        url: 'test-image.jpg',
      },
    };

    render(<VehicleItem vehicle={vehicle} index={0} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    expect(screen.getByText('Test Vehicle')).toBeInTheDocument();
    expect(screen.getByText('Emissions:')).toBeInTheDocument();
    expect(screen.getByText('Passenger Capacity:')).toBeInTheDocument();
  });
});
