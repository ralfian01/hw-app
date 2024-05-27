import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "@ionic/react/css/ionic-swiper.css";

// slide from lib Swiper


import "./Slide.scss";

interface SlideCollectionProps {
  images?: Array<any>;
}
/**
 * 
 * @param props images type Array[]
 * @returns 
 */
const Slide: React.FC<SlideCollectionProps> = (props: SlideCollectionProps) => {
  return (
    <Swiper
      loop={true}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      slidesPerView={"auto"}
      className="swiper_container">
      {props.images?.map((image, i) => (
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
