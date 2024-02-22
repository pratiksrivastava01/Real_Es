import { useEffect } from "react";
import Call from "./Call";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  useEffect(() => {
    document.title = "About Us"; // Set your desired page title here
  }, []);
  return (
    <>
      <Navbar />
      <Call />
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <div className="">
            <h1 className=" font-bold text-5xl">About US</h1>
            <span className="font-sm text-yellow"> </span>
          </div>
          <div className="flex justify-center p-4 sm:p-0  ">
            <div className=" w-[80%] sm:w-[100%] p-4 justify-center items-center">
              <p>
                Welcome to PROPERTY PLATFORM ! At PROPERTY PLATFORM , we believe
                in more than just buying and selling properties – we're
                dedicated to facilitating life-changing experiences. Whether
                you're searching for your dream home, looking to invest in
                lucrative properties, or seeking expert guidance on real estate
                transactions, we're here to guide you every step of the way.
                With a passion for innovation and a commitment to excellence, we
                leverage cutting-edge technology and industry expertise to
                redefine the real estate experience. Our team of seasoned
                professionals brings years of collective experience in property
                development, investment analysis, marketing strategies, and
                negotiation tactics to ensure that your real estate journey is
                seamless and rewarding. But beyond the transactions, we
                prioritize building lasting relationships with our clients. We
                understand that every client has unique needs and aspirations,
                which is why we take the time to listen, understand, and tailor
                our services to meet your specific goals. Whether you're a
                first-time homebuyer, a seasoned investor, or a property owner
                looking to sell, we're dedicated to delivering personalized
                solutions that exceed your expectations. At PROPERTY PLATFORM ,
                integrity, transparency, and professionalism are at the core of
                everything we do. We pride ourselves on our unwavering
                commitment to ethical business practices and strive to uphold
                the highest standards of service excellence. When you choose to
                partner with us, you can rest assured that you're in capable
                hands. Thank you for considering us for your real estate needs.
                We look forward to the opportunity to serve you and help you
                achieve your real estate goals. Warm regards, Manas Chowdhury
                Founder/CEO, PROPERTY PLATFORM
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap  bg-primary-light shadow-2xl rounded-lg p-2 mt-5 sm:mt-0">
                  <img
                    src="/journey.jpg"
                    alt="journey"
                    className="w-[35%] h-[35%] sm:w-[100%]"
                  />
                  <p className=" w-[65%]  mt-10 sm:mt-0 sm:w-[100%] p-4 sm:p-3">
                    <h1 className="text-red font-bold text-3xl sm:text-xl sm:mb-0 mb-8">
                      The Beginning
                    </h1>
                    Welcome to [Your Real Estate Company], founded by [Founder's
                    Name] in [Year of Establishment]. Our mission is to redefine
                    the real estate experience, going beyond transactions to
                    make a lasting impact on how clients approach property. We
                    are dedicated to changing lives, committed to perfection,
                    and set new benchmarks of excellence. Join us for a
                    transformative real estate journey, guiding you towards a
                    brighter future with every step.
                  </p>
                </div>
                <div className="flex flex-wrap  bg-primary-light rounded-lg shadow-2xl p-2 mt-5 sm:mt-0">
                  <p className=" w-[65%]  mt-10 sm:mt-0 sm:w-[100%] p-4 sm:p-3">
                    <h1 className="text-red font-bold text-3xl sm:text-xl sm:mb-0 mb-8">
                      Our Success
                    </h1>
                    The success and unwavering faith of our clients have been
                    our driving force at [Your Real Estate Company]. This trust
                    has inspired us to expand our horizons beyond conventional
                    real estate practices. Motivated by this confidence, we've
                    undertaken a mission to offer comprehensive property
                    solutions, akin to our Integrated School Programs like UDAYA
                    Plus, SUPREME, and PINNACLE at FIITJEE. Our commitment
                    extends to providing a wholesome school education through
                    initiatives like FIITJEE Junior Colleges in Bhubaneswar,
                    Hyderabad, Vijayawada, and Visakhapatnam. Collaborating with
                    like-minded schools nationwide, we aim to create an ideal
                    educational platform that ensures students gain admission to
                    premier institutions without external coaching stress. This
                    same faith has propelled us to achieve landmark success in
                    various arenas, including NTSE. Join us as we continue to
                    build on this foundation of trust, offering a transformative
                    real estate experience tailored to your unique needs and
                    aspirations.
                  </p>
                  <img
                    src="success.jpg"
                    alt="success"
                    className="w-[35%] h-[35%] sm:w-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex justify-center flex-col items-center p-4 sm:p-0  ">
            <div className=" w-[80%] sm:w-[100%] p-4 justify-center flex flex-col items-center">
              <h1 className="text-red font-bold text-5xl sm:text-3xl">
                Our Mission
              </h1>
              <p className="mt-[3rem] sm:mt-2 text-2xl sm:text-lg">
                To create World's Best Institution that serves the society for
                thousands of years -may be perennially. To Make India Global
                Leader In Education, both In Not For Profit as well as For
                Profit Ventures.{" "}
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
                Keeping our mission in mind. we will establish a
                transformational leadership position in each of our projects
                across the globe. We will become a Comprehensive Global Leader
                In Education by 2030.
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
