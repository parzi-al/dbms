import React from 'react';
import Image from 'next/image';
import Crop from './../assets/crop.svg';
import Mens from './../assets/mens.svg';
import Womens from './../assets/womens.svg';
import Shoulder from './../assets/shoulder.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  },
};

const Scroller = () => {
  return (
    <div>
      <Carousel responsive={responsive}>
        <Image src={Crop} alt='product' width={500} height={500} className='w-full border-0 border-white ' />
        <Image src={Womens} alt='product' width={500} height={500} className='w-full border-0 border-white' />
        <Image src={Mens} alt='product' width={500} height={500} className='w-full border-0 border-white' />
        <Image src={Shoulder} alt='product' width={500} height={500} className='w-full border-0 border-white' />
      </Carousel>
    </div>
  );
};

export default Scroller;