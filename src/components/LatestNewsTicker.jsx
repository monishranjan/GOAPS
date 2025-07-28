import React from "react";
import Slider from "react-slick";

const newsItems = [
  "Seat allotment result of Special Round II has been declared.",
  "Round 1 Counselling to start from 25th July 2025.",
  "Uploading of documents for Round 1 ends on 29th July.",
  "Candidates must check institute reporting instructions.",
  "Refund process for Round 2 will start on 10th August.",
  "Round 3 registration opens on 14th August.",
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
