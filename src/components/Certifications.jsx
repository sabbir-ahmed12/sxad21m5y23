import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import certificates from "../data/certificates";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Certifications = () => {
  const sortedCertificates = certificates.sort(
    (a, b) => b.date_issued - a.date_issued
  );

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sortedCertificates.map((c) => (
          <SwiperSlide key={c._id}>
            <img src={c.path} alt={c.course_title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Certifications;
