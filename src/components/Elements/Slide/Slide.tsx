// import package

// import component SWIPER, SWIPER SLIDE
import { Swiper, SwiperSlide } from "swiper/react";

// import modules swiper
import { Autoplay } from "swiper/modules";

// import scss swiper
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/navigation";

// import scss swiper ionic
import "@ionic/react/css/ionic-swiper.css";

// import SCSS
import "./Slide.scss";

// import component photo viewer
import IonPhotoViewer from "@codesyntax/ionic-react-photo-viewer";

// interface for props
interface SlideCollectionProps {
  images?: Array<any>;
}

/**
 * 
 * @param param0 images: Array<any>
 * @returns 
 */

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
