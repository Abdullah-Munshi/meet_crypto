import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameWidget from "./GameWidget";
const GamewidgetCarousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: "",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="game_carousel">
      <GameWidget entry="5" win="8" />
      <GameWidget entry="10" win="16" highlight={true} />
      <GameWidget entry="100" win="108" />
      <GameWidget entry="100" win="108" />
      <GameWidget entry="100" win="108" />
    </Slider>
  );
};

export default GamewidgetCarousel;
