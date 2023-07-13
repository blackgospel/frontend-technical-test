import React, { useEffect, useState } from 'react';
import { useDisclosure, useIntersectionObserver } from '../../hooks';
import VehicleModal from '../VehicleModal';
import './style.scss';

export default function VehicleItem({ vehicle, index }) {
  const [ref, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  const [isModalOpen, { open, close }] = useDisclosure(false);
  const [shouldAnimateModal, setAnimateModal] = useState(false);

  const handleModalOpen = () => {
    open();
    setAnimateModal(true);
  };

  const handleModalClose = () => {
    setAnimateModal(false);
    setTimeout(() => {
      close();
    }, 300);
  };

  const imageSources = vehicle.media.map((item) => ({
    src: item.url,
    media: `(min-width: ${item.screenSize}px)`,
  }));

  const imageAlt = vehicle.media.length > 0 ? vehicle.media[0].name : '';

  const delay = `${index * 0.1}s`;

  useEffect(() => {
    if (isVisible && isModalOpen) {
      setAnimateModal(true);
    }
  }, [isVisible, isModalOpen]);

  return (
    <>
      <div
        className={`vehicle-item${isVisible ? ' fade-in-up' : ''}`}
        ref={ref}
        data-testid={`vehicle-item-${vehicle.id}`}
        style={{ transitionDelay: delay }}
      >
        <figure className="vehicle-item__image-container">
          <picture>
            {imageSources.map((source) => (
              <source key={source.src} srcSet={source.src} media={source.media} />
            ))}
            <img className="vehicle-item__image" src={vehicle.media[0].url} alt={imageAlt} />
          </picture>
          <figcaption className="vehicle-item__description">{vehicle.media.name}</figcaption>
        </figure>

        <div className="vehicle-item__info-container">
          <div className="vehicle-item__info">
            <div className="vehicle-item__info-wrapper">
              <span className="vehicle-item__info-header">
                <h2 className="vehicle-item__name" data-testid="vehicle-item-name">
                  {vehicle.name}
                </h2>
                <p className="vehicle-item__price subtle">
                  From
                  {' '}
                  {vehicle.price}
                </p>
              </span>
              <p className="vehicle-item__description">{vehicle.description}</p>
            </div>

            <button className="vehicle-item__cta" type="button" onClick={handleModalOpen}>
              Read More
            </button>
          </div>
        </div>
      </div>

      <VehicleModal
        open={isModalOpen}
        index={index}
        onRequestClose={handleModalClose}
        vehicle={vehicle}
        shouldAnimateModal={shouldAnimateModal}
      />
    </>
  );
}
