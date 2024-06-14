import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/navigation";
import "@ionic/react/css/ionic-swiper.css";
import "./Slide.scss";
import { Autoplay, Navigation } from "swiper/modules";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import IonPhotoViewer from "@codesyntax/ionic-react-photo-viewer";

interface SlideCollectionProps {
  images?: Array<any>;
}

const Slide: React.FC<SlideCollectionProps> = ({
  images
}: SlideCollectionProps) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      loop
      slidesPerView={1}
      modules={[Autoplay]}
      className="mySwiper">
      {images?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="image-wraper">
            <IonPhotoViewer
              title=""
              src={item}>
              <img
                src={item}
                alt={item}
                className="w-full h-full object-cover bg-cover rounded-box"
              />
            </IonPhotoViewer>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
