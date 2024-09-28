import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image: `1.webp`,
    title: `img1`,
  },
  {
    image: `2.webp`,
    title: `img2`,
  },
  {
    image: `3.webp`,
    title: `img3`,
  },
  {
    image: `4.webp`,
    title: `img4`,
  },
  {
    image: `5.webp`,
    title: `img5`,
  },
  {
    image: `6.webp`,
    title: `img6`,
  }
];

export default function Carousel2() {
  const [sliderSettings, setSliderSettings] = useState({});

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Ease" 
  };

  const settings1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Ease" 
  };

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Apply settings1 for large screens (lg and up)
        setSliderSettings(settings1);
      } else {
        // Apply default settings for other screen sizes
        setSliderSettings(settings);
      }
    };

    // Set the initial settings based on current screen size
    handleResize();

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden">
        <Slider {...sliderSettings}>
          {data.map((i, idx) => {
            return (
              <div key={idx} className="">
                <img
                  src={i.image}
                  alt={i.title}
                  className="lg:w-[98.5%] lg:h-[75vh] object-cover" // Adjusted for responsiveness
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
