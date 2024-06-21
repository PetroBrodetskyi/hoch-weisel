import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from '../Modal/Modal'; 

const GaleryCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const imagePaths = [
    '../../assets/images/Burggasse.JPG',
    '../../assets/images/Rathaus.JPG',
    '../../assets/images/Backhausstraße.jpg',
    '../../assets/images/Burggasse.JPG',
    '../../assets/images/Rathaus.JPG',
    '../../assets/images/Hausbergstraße.jpg'
  ];

  const getImageUrl = (path) => new URL(path, import.meta.url).href;

  const openModal = (index) => {
    setSelectedImage(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={false}
        emulateTouch={true}
        useKeyboardArrows={true}
        transitionTime={2000}
        centerMode={true}
        centerSlidePercentage={33.33}
        className="center-mode"
      >
        {imagePaths.map((path, index) => (
          <div key={index} onClick={() => openModal(index)}>
            <img src={getImageUrl(path)} alt={`Зображення ${index}`} />
            <p className="legend">{`Зображення ${index}`}</p>
          </div>
        ))}
      </Carousel>

      <Modal
        showModal={showModal}
        closeModal={closeModal}
        imagePath={getImageUrl(imagePaths[selectedImage])}
      />
    </>
  );
}

export default GaleryCarousel;