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
    autoplaySpeed: 2400,
    centerMode: true,
    centerPadding: 150,
    nextArrow: "",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          centerPadding: 130,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          centerPadding: 150,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: 80,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: 30,
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
