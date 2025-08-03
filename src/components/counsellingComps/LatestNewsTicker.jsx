import React from "react";
import Slider from "react-slick";

const newsItems = [
  "Seat allotment result has been declared.",
  "Choice locking for colleges and programs will end on 5th August.",
  "Document verification will start from 6th August.",
  "Special Round registration opens on 7th August.",
  "Candidates must carefully review institute reporting guidelines.",
];

const LatestNewsTicker = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 8000,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: true,
  };

  return (
    <div className="w-full bg-[#052963] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center space-x-4">
        <h2 className="text-lg font-medium text-whites min-w-fit">LATEST NEWS</h2>
        <div className="flex-1 overflow-hidden group">
          <Slider {...settings}>
            {newsItems.map((news, index) => (
              <div key={index} className="px-4 whitespace-nowrap">
                <span>{news}</span>
                <span className="ml-2 bg-[#ff0000] text-white px-2 py-0.5 text-xs">
                  New
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsTicker;
