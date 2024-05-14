import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="sliderContainer ">
      <div className="py-4 flex flex-col items-center">
        <img className="" src="logo.png" width={"56px"} alt="" />
        <p className=" ">Welcome to the Official Website of</p>
        <h1 className=" text-3xl font-bold">Karachi Police Office</h1>
      </div>

      <div className="slider-container mx-auto max-w-3xl">
        <Slider {...settings}>
          <div>
            <img
              className=""
              src="https://i.dawn.com/large/2019/03/5c9b3619dd5bd.jpg"
              alt="Image 1"
            />
          </div>
          <div>
            <img
              className=""
              src="https://sindhpolice.gov.pk/images/ccpoaddresses121220/1.jpg"
              alt="Image 1"
            />
          </div>
          <div>
            <img
              className=""
              src="https://ssusindhpolice.gos.pk/wp-content/uploads/2021/10/IMG_3006-scaled-1.jpg"
              alt="Image 1"
            />
          </div>
          <div>
            <img
              className=""
              src="https://www.incpak.com/wp-content/uploads/2024/02/1-1-1200x719.webp"
              alt="Image 1"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
