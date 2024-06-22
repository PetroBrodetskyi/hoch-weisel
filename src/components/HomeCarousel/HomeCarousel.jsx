import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from '../Modal/Modal';
import './HomeCarousel.css';

function HomeCarousel() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [
    {
      src: 'https://i.postimg.cc/KkdTK0BJ/image1.jpg',
      alt: 'First slide',
      caption: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      src: 'https://i.postimg.cc/p9czvWTN/image2.jpg',
      alt: 'Second slide',
      caption: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      src: 'https://i.postimg.cc/sG7h55Jy/image3.jpg',
      alt: 'Third slide',
      caption: 'Third slide label',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      src: 'https://i.postimg.cc/jwWNdpwD/image4.jpg',
      alt: 'Fourth slide',
      caption: 'Fourth slide label',
      description: 'Phasellus vestibulum lorem sed risus ultricies tristique nulla.'
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
            <div className="carousel-caption">
              <h5>{image.caption}</h5>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
      {showModal && <Modal showModal={showModal} closeModal={closeModal} imagePath={currentImage} />}
    </>
  );
}

export default HomeCarousel;
