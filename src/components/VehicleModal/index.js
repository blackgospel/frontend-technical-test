import React from 'react';
import { toTitle } from '../../utils/strings';
import './style.scss';

export default function VehicleModal({
  vehicle,
  onRequestClose,
  open,
  shouldAnimateModal,
  index,
}) {
  if (!open) {
    return false;
  }

  return (
    <dialog
      className={`vehicle-modal${shouldAnimateModal ? ' fade-in' : ''}`}
      id={`vehicle-modal-${index}`}
    >
      <div className="vehicle-modal__content">
        <div className="vehicle-modal__header">
          <h2 className="vehicle-modal__title">{vehicle.name}</h2>
          <p className="vehicle-modal__price subtle">
            From
            {' '}
            {vehicle.price}
          </p>
          <p className="vehicle-modal__description">{vehicle.description}</p>
        </div>

        <p className="vehicle-modal__meta">
          <strong>{vehicle.meta.emissions.template}</strong>
          :
          {' '}
          {vehicle.meta.emissions.value}
          <br />
          <strong>Passenger Capacity</strong>
          :
          {' '}
          {vehicle.meta.passengers}
          <br />
          <strong>Body Styles</strong>
          :
          {' '}
          {vehicle.meta.bodystyles.map(toTitle).join(', ')}
          <br />
          <strong>Drive Train</strong>
          :
          {' '}
          {vehicle.meta.drivetrain.join(', ')}
        </p>
        <button
          type="button"
          className="vehicle-modal__close"
          onClick={onRequestClose}
          aria-label="Close Modal"
        >
          &#x2716;
        </button>
      </div>
    </dialog>
  );
}
