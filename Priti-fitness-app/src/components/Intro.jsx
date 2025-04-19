import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/CaraouselPhoto/slide1.jpg",
    text: "Unleash Your Power",
  },
  {
    image: "/CaraouselPhoto/slide2.jpg",
    text: "Confidence Through Consistency",
  },
  {
    image: "/CaraouselPhoto/slide3.jpg",
    text: "Train Your Body, Elevate Your Mind",
  },
];

const FitnessCarousel = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/welcome");
    }
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="mt-6 mb-12">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.text}
              className="w-full h-[500px] object-cover rounded-xl"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center rounded-xl">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">{slide.text}</h2>
              <button className="bg-pink-600 hover:bg-pink-700 transition px-6 py-3 text-white text-lg rounded-full"
              onClick={handleClick}>
                Let's Go 
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="mt-10 px-6 text-center">
  <h3 className="text-2xl font-semibold text-pink-600 mb-2">
    Ready to Transform?
  </h3>
  <p className="text-gray-700 mb-4 max-w-xl mx-auto">
    Join thousands of women who have taken the first step toward becoming their strongest selves. Let's build confidence, strength, and energy — together.
  </p>
  <button
    className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-6 py-3 rounded-full font-medium shadow-lg transition duration-300"
    onClick={handleClick}
  >
    Start Your Journey
  </button>
</div>
    </div>
  );
};

export default FitnessCarousel;
