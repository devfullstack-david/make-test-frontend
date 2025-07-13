import "@/styles/components/home/homeApp.css"
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/images/home/home-slider-1.png",
  "/images/home/home-slider-2.png",
  "/images/home/home-slider-3.png"
]

const HomeApp = () => {
  return (
    <div className="home-app__container">
      <div style={{ width: "40%" }}>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 10000,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image 
                src={src}
                alt={`Slide ${index + 1}`}
                width={600}
                height={500}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        2
      </div>
    </div>
  )
}

export default HomeApp