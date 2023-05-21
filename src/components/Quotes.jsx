import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import quotes from "../data/quotes";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Quotes = () => {
  return (
    <div className="mb-5">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="quote-swiper"
      >
        {quotes.map((item) => (
          <SwiperSlide key={item._id} className="blockquote">
            <h5 className="fst-italic">{item.quote}</h5>
            <p className="blockquote-credit">{item.source || "Unknown"}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Quotes;
