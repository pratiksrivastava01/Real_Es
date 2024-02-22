import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  useEffect(() => {
    document.title = "About Us"; // Set your desired page title here
  }, []);
  return (
    <>
      <Navbar />
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <div className="">
            <h1 className=" font-bold text-5xl">About US</h1>
            <span className="font-sm text-yellow"> </span>
          </div>
          <div className="flex justify-center p-4 sm:p-0  ">
            <div className=" w-[80%] sm:w-[100%] p-4 justify-center items-center">
              <p className=" sm:mt-2 text-2xl sm:text-lg">
                Welcome to PROPERTY PLATFORM ! <br />
                We're dedicated to redefining your real estate experience with
                cutting-edge technology and personalized solutions. Our
                commitment to integrity and professionalism ensures seamless
                transactions tailored to your goals. Let us exceed your
                expectations.
                <br /> Warm regards,
                <br />{" "}
                <span className="font-bold text-lg">Manas Chowdhury </span>{" "}
                <br />
                Founder/CEO, PROPERTY PLATFORM
              </p>
            </div>
          </div>{" "}
          <div className="flex justify-center flex-col items-center p-4 sm:p-0  ">
            <div className=" w-[80%] sm:w-[100%] p-4 justify-center flex flex-col items-center">
              <h1 className="text-red font-bold text-5xl sm:text-3xl">
                Our Mission
              </h1>
              <p className="mt-[3rem] sm:mt-2 text-2xl sm:text-lg">
                Our mission is to exceed expectations by delivering exceptional
                service, fostering meaningful relationships, and providing
                unparalleled expertise in real estate transactions. We strive to
                empower our clients with the knowledge and resources they need
                to make informed decisions, while always prioritizing their best
                interests. Through integrity, transparency, and a dedication to
                excellence, we aim to be the trusted partner our clients rely on
                for all their real estate needs.
              </p>
              <img
                src={`mission.jpg`}
                alt="mission"
                className="w-[70%] h-[70%] sm:w-[100%]"
              />
            </div>
            <div className=" w-[80%] sm:w-[100%] p-4 justify-center flex flex-col items-center">
              <h1 className="text-red font-bold text-5xl sm:text-3xl">
                Our Vision
              </h1>
              <p className="mt-[3rem] sm:mt-2 text-2xl sm:text-lg">
                Empowering dreams, shaping futures. We envision a world where
                every individual finds their perfect place to call home. Our
                commitment to excellence, innovation, and integrity drives us to
                redefine the real estate experience, creating spaces that
                inspire, communities that thrive, and connections that last a
                lifetime
              </p>
              <img
                src={`vision.jpg`}
                alt="mission"
                className="w-[70%] h-[70%] sm:w-[100%]"
              />
            </div>
          </div>
          {/* <div className="flex justify-center p-4 sm:p-0  bg-[#F7F8FC]">
            <div className=" w-[80%] sm:w-[100%] p-4 justify-center items-center">
              <h1 className="text-5xl sm:text-3xl font-bold p-4">
                Our <span className="text-red">Guiding Principles</span>{" "}
              </h1>
              <div className="flex flex-col gap-5 p-5">
                <div className="flex justify-between">
                  <img
                    src={`working.png`}
                    alt="guiding principle"
                    className="h-[4rem] w-[4rem] rounded-full"
                  />
                  <p className="items-center flex ml-5 ">
                    Consciously work_ every moment of the day, to ensure that
                    every student fully unravels his / her multidimensional
                    talent 8, potential.{" "}
                  </p>
                </div>
                <div className="flex ">
                  <img
                    src={`perfect.png`}
                    alt="guiding principle"
                    className="h-[4rem] w-[4rem] rounded-full"
                  />
                  <p className="items-center flex ml-14 sm:ml-5 ">
                    Be perfect in everything that we do. Perfection Is making
                    the best efforts within the constraints of space. time 8,
                    resources.{" "}
                  </p>
                </div>
                <div className="flex ">
                  <img
                    src={`analyse.png`}
                    alt="guiding principle"
                    className="h-[4rem] w-[4rem] rounded-full"
                  />
                  <p className="items-center flex ml-14 sm:ml-5 ">
                    Analyse every task with fundamentals and accept existing
                    practices If perfect otherwise innovate to move foward to
                    achieve our Mission in consonance with our vision
                  </p>
                </div>

                <div className="flex ">
                  <img
                    src={`ethics.png`}
                    alt="guiding principle"
                    className="h-[4rem] w-[4rem] rounded-lg"
                  />
                  <p className="items-center flex ml-14 sm:ml-5 ">
                    Work ethically to inspire everyone who comes in our contact.
                  </p>
                </div>
                <div className="flex ">
                  <img
                    src={`technology.png`}
                    alt="guiding principle"
                    className="h-[4rem] w-[4rem] rounded-full"
                  />
                  <p className="items-center flex ml-14 sm:ml-5 ">
                    Utilise technology to connect students. parents. teachers,
                    administrators. bureaucrats & the government for a
                    collaborative efforts to transform global society.
                    Facilitate information flow to all those who matter to
                    humanity.
                  </p>
                </div>
                <div className="flex ">
                  <img
                    src={`partnership.png`}
                    alt="guiding principle"
                    className="h-[4rem] w-[4rem] rounded-full"
                  />
                  <p className="items-center flex ml-14 sm:ml-5 ">
                    Establish Joint ventures & partnerships with compatible &
                    synergistic individuals. associations, companies and
                    governments
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
