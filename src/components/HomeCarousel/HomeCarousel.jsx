import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomModal from '../Modal/CustomModal';
import css from './HomeCarousel.module.css';
import data from '../../data/base.json';

function HomeCarousel() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage('');
  };

  const homeData = data.home;
  const carouselImages = data.images;

  if (!homeData || !carouselImages) {
    return null;
  }

  return (
    <div className={css.container}>
      <Carousel
        arrows={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {carouselImages.map((image, index) => (
          <div key={index} onClick={() => openModal(image.src)}>
            <img
              className="carousel-image"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Carousel>
      {showModal && (
        <CustomModal isOpen={showModal} onClose={closeModal}>
          <img src={currentImage} alt="Image" className="modal-image" />
        </CustomModal>
      )}
    </div>
  );
}

export default HomeCarousel;
