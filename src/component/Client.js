import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
        <>
        <div className="bg-[#373074] pt-12 pb-12 h-[550px] lg:mt-0 mt-[200px]">
      <div className="container max-w-[1200px] gap-12">
        <p className="text-3xl text-white text-center font-semibold pb-[70px] pt-12">Our Partners</p>
        <Slider {...settings}>
          <div>
          <img src="./images/partner3.jpg" className='w-[220px] h-[200px]'/>
          </div>
          <div>
          <img src="./images/partner5.jpg" className='w-[220px] h-[200px]'/>
          </div>
          <div>
          <img src="./images/partner7.jpg" className='w-[220px] h-[200px]'/>
          </div>
          <div>
          <img src="./images/seceon.jpg" className='w-[220px] h-[200px]'/>
          </div>
          <div>
          <img src="./images/partner5.jpg" className='w-[220px] h-[200px]'/>
          </div>
          <div>
          <img src="./images/partner7.jpg"  className='w-[220px] h-[200px]'/>
          </div>
        </Slider>
      </div>
      </div>
      </>
    );
  }
}