import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import SwiperComponet from '../../Helpers/SwiperComponet';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/swiperStyle.css';
import '../../styles/Gallary_Frame.css'
import { useMediaQuery } from "react-responsive";

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';

const Gallary_Frame = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 764 });
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesArray = [
    { id: 1, url: '../images/Curoals/Image-1.png' },
    { id: 2, url: '../images/Curoals/Image-2.png' },
    { id: 3, url: '../images/Curoals/Image-3.png' },
    { id: 4, url: '../images/Curoals/Image-4.png' },
    { id: 5, url: '../images/Curoals/Image-5.png' },
    { id: 6, url: '../images/Curoals/Image-2.png' },
    { id: 7, url: '../images/Curoals/Image-3.png' },
    { id: 8, url: '../images/Curoals/Image-4.png' },
  ];

  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <Container fluid className='position-relative overflow-hidden w-100' >
      <div className='home-main-div-margin-bottom-and-top'>
        <Row className="p-0 m-0 ">
          <Col className="home-heading home-main-div-margin-bottom-and-top">
            Gallery
          </Col>
        </Row>
        <Row className='p-0 m-0 w-100 ' >
          <Col xs={12} md={12} lg={12} className="position-relative w-100 " >
          <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={isSmallScreen ? 'auto' : 5}
  spaceBetween={isSmallScreen ? 0 : 0}
  coverflowEffect={{
    rotate: 0,
    stretch: -30,
    depth: 50,
    modifier: 4,
    slideShadows: true,
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
  modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
  className="mySwiper mt-2 mb-2"
  style={{ width: '100%', height: 'auto' }}
  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    {imagesArray.map((image, index) => (
      <SwiperSlide 
        key={image.id + index} 
        className={index === activeIndex ? 'active-slide' : 'inactive-slide'}
        style={{ 
          margin: "10px", 
          borderRadius: '25px',
          transform: index === activeIndex ? 'scale(1.2)' : 'scale(0.8)', // Scale active image larger
          zIndex: index === activeIndex ? 1 : 0, // Ensure active image is on top
        }}
      >
        <img
          src={image.url}
          alt={`Image ${image.id}`}
          style={{
            objectFit: 'cover',
            maxWidth: '300px', // Ensure image doesn't exceed container width
            height: '350px',  // Maintain aspect ratio
            borderRadius: '25px',
          }}
        />
      </SwiperSlide>
    ))}
  </div>
</Swiper>

          </Col>
        </Row>
      </div>
    </Container>
  </ThemeProvider>
  
  );
};

export default Gallary_Frame;
