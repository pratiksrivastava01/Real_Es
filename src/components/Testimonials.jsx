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
                <span className="bold-20">Pratik Srivastava</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi illo sequi quaerat quibusdam adipisci sit repellat sunt,
              rerum nobis.
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
                <span className="bold-20">Pratik Srivastava</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi illo sequi quaerat quibusdam adipisci sit repellat sunt,
              rerum nobis.
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
                <span className="bold-20">Pratik Srivastava</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi illo sequi quaerat quibusdam adipisci sit repellat sunt,
              rerum nobis.
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
                <span className="bold-20">Pratik Srivastava</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi illo sequi quaerat quibusdam adipisci sit repellat sunt,
              rerum nobis.
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
                <span className="bold-20">Pratik Srivastava</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi illo sequi quaerat quibusdam adipisci sit repellat sunt,
              rerum nobis.
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
                <span className="bold-20">Pratik Srivastava</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi illo sequi quaerat quibusdam adipisci sit repellat sunt,
              rerum nobis.
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
                <span className="bold-20">Pratik Srivastava</span>
                <span>Job Position</span>
              </div>
            </div>
            <div className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              excepturi illo sequi quaerat quibusdam adipisci sit repellat sunt,
              rerum nobis.
            </div>
          </div>
        </SwiperSlide>
        {/* Add similar styling for other slides */}
      </Swiper>
    </div>
  );
};

export default Testimonials;
