import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "@ionic/react/css/ionic-swiper.css";
import "./Slide.scss";
import { useRef, useState } from "react";

const Slide = () => {
  const [paginate, setPaginate] = useState(0);
  const mySlide = useRef(null);
  const images = [
    "assets/img/collection-1.png",
    "assets/img/collection-2.png",
    "assets/img/collection-3.png",
    "assets/img/collection-4.png",
    "assets/img/collection-5.png",
    "assets/img/collection-6.png",
    "assets/img/collection-4.png",
    "assets/img/collection-5.png",
    "assets/img/collection-6.png"
  ];

  const totalSlides = images.length;
  const slidesPerView = 3;
  const slidesPerGroup = 3;

  return (
    <Swiper
      loop={true}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      slidesPerView={"auto"}
      ref={mySlide}
      className="swiper_container">
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <img
            draggable="false"
            src={image}
            alt={`Collection ${i}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
