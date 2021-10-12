import React, { useEffect, useState } from "react";

const arrayImages = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % arrayImages.length);

      console.log(currentSlide);
    }, 2000);

    return () => {
      clearInterval(intervalID);
    };
  }, [currentSlide]);
  return (
    <div>
      <img src={arrayImages[currentSlide]} alt="" />
    </div>
  );
}
