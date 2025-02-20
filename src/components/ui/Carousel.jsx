import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import PropTypes from "prop-types";
import { Navigation, Autoplay } from "swiper/modules";

const Carousel = ({ brands }) => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 }, // Em telas pequenas, mostrar 2
          1024: { slidesPerView: 4 }, // Em telas grandes, mostrar 3
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full"
      >
        {brands.map((brand, index) => (
          <SwiperSlide
            key={index}
            className="flex w-full cursor-pointer items-center justify-center p-[10px]"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-16 min-h-[160px] min-w-[190px] rounded-2xl object-contain p-[24px] shadow-[1px_1px_5px_1px_rgba(0,0,0,0.1)]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões personalizados abaixo do Swiper */}
      <div className="flex gap-4 pt-[20px]">
        <button className="custom-swiper-button-prev cursor-pointer px-4 py-2 text-2xl text-[#001E27]">
          ❮
        </button>
        <button className="custom-swiper-button-next cursor-pointer px-4 py-2 text-2xl text-[#001E27]">
          ❯
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Carousel;
