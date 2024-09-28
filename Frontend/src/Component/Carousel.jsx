


import React from "react";
import Slider from "react-slick";


const data = [
    {
        image:`car1img1.png`
    },
    {
        image:`car1img2.png`
    },
    {
        image:`car1img3.webp`
    }
  ];
  

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
          {data.map((i, idx) => {
            return (
              <div key={idx} className="">
                <img
                  src={i.image}
                  alt={i.title}
                  className="lg:object-fit h-[30vh] obeject-contain w-[100%] lg:h-[75vh] w-[100%]" 
                />
              </div>
            );
          })}
        </Slider>   
    </div>
  );
}

export default Carousel;
