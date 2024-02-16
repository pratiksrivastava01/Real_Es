import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="p-4 mt-5 sm:mt-0 max-container padding-container mb-24">
      <div className="flex justify-center flex-col items-center padding-container">
        <h1 className="font-bold text-5xl items-center justify-center flex text-blue-900 sm:text-3xl">
          What Our Clients Say About Us?
        </h1>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        effect="slide"
        loop={true}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        centeredSlides={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mt-20 cursor-grab"
      >
        <SwiperSlide className="bg-blue-900 p-4 rounded-lg text-white">
          <div className="p-2">
            <div className="flex justify-center gap-10 items-center">
              <img
                src="/p1.png"
                alt="person1"
                height={55}
                width={55}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="bold-20">Manik Das</span>
                <span>Repeted Customer</span>
              </div>
            </div>
            <div className="mt-5">
              Property Platform is one stop destination for easy and seamless
              property search
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-blue-900 p-4 rounded-lg text-white">
          <div className="p-2">
            <div className="flex justify-center gap-10 items-center">
              <img
                src="/p1.png"
                alt="person1"
                height={55}
                width={55}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="bold-20">Sanchita Roy</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              With Property Platform it has been an easier way to find new house
              or rent a place
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-blue-900 p-4 rounded-lg text-white">
          <div className="p-2">
            <div className="flex justify-center gap-10 items-center">
              <img
                src="/p1.png"
                alt="person1"
                height={55}
                width={55}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="bold-20">Arindam Guinn</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              Best place to see which flat to rent{" "}
              <span className="invisible"> Lorem, ipsum dolor.</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-blue-900 p-4 rounded-lg text-white">
          <div className="p-2">
            <div className="flex justify-center gap-10 items-center">
              <img
                src="/p1.png"
                alt="person1"
                height={55}
                width={55}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="bold-20">Amrita Datta</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              Easy , User friendly and beautiful website . One of it’s kind
            </div>
          </div>
        </SwiperSlide>

        {/* Add similar styling for other slides */}
      </Swiper>
    </div>
  );
};

export default Testimonials;
