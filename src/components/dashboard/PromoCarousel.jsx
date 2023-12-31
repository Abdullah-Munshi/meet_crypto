import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import promoImage from "../../assets/promo.png";
import PromoBanner from "./PromoBanner";

const promoArray = [
  {
    imgUrl: promoImage,
  },
  {
    imgUrl: promoImage,
  },
  {
    imgUrl: promoImage,
  },
  {
    imgUrl: promoImage,
  },
  {
    imgUrl: promoImage,
  },
];

const PromoCarousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: "",
    centerMode: true,
    centerPadding: 150,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          centerPadding: 150,
        },
      },
      {
        breakpoint: 1024,
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
    <Slider {...settings}>
      {promoArray.map((item, index) => (
        <PromoBanner key={index} imgUrl={item.imgUrl} />
      ))}
    </Slider>
  );
};

export default PromoCarousel;
