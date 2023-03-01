import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import { Icon, IconIdentifier } from '..';
import './PhotoCarousel.css';

const PhotoCarousel = ({ containerClassName, interval = 2000, children }) => {
  return (
    <div className={containerClassName || 'photo-carousel-container'}>
      <Carousel
        interval={interval}
        nextIcon={
          <Icon
            className="chevron-right-padding"
            iconIdentifier={IconIdentifier.ChevronRight}
          />
        }
        prevIcon={
          <Icon
            className="chevron-left-padding"
            iconIdentifier={IconIdentifier.ChevronLeft}
          />
        }
      >
        {Children.toArray(children)}
      </Carousel>
    </div>
  );
};

PhotoCarousel.propTypes = {
  containerClassName: PropTypes.string,
  interval: PropTypes.number,
  children: PropTypes.node.isRequired,
};

const PhotoCarouselItem = ({ className, children }) => {
  return (
    <Carousel.Item className={className || 'carousel-item'}>
      {children}
    </Carousel.Item>
  );
};

PhotoCarouselItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default PhotoCarousel;
export { PhotoCarouselItem };
