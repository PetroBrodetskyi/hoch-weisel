import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomModal from '../Modal/CustomModal';
import './HomeCarousel.css';

function HomeCarousel() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [
    {
      src: 'https://i.postimg.cc/d30jxX1P/Backhausstra-e.jpg/image1.jpg',
      alt: 'Backhausstra',
    },
    {
      src: 'https://i.postimg.cc/Twf9rhvP/Burggasse.jpg/image2.jpg',
      alt: 'Burggasse',
    },
    {
      src: 'https://i.postimg.cc/rsYNXJ0d/Hausbergstra-e.jpg/image3.jpg',
      alt: 'Hausbergstra',
    },
    {
      src: 'https://i.postimg.cc/fLCv5ZMf/Rathaus.jpg.jpg',
      alt: 'Rathaus',
    }
  ];

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

  return (
    <>
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
      >
        {images.map((image, index) => (
          <div key={index} onClick={() => openModal(image.src)}>
            <img
              className="carousel-image"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Carousel>
      {showModal && <CustomModal isOpen={showModal} onClose={closeModal}>
        <img src={currentImage} alt="Image" className="modal-image"/>
      </CustomModal>}
    </>
  );
}

export default HomeCarousel;