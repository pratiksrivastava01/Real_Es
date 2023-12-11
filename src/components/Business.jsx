import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card bg-black  hover:cursor-pointer hover:text-white`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full hover:text-white ${styles.flexCenter} bg-blue-500`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 hover:text-white">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-30 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
    <div className="max-container padding-container relative w-full flex justify-center flex-wrap">
      <div>
        <h2 className="bold-40 lg:bold-40">
          Handle the property details, <br className="sm:block hidden" /> we'll
          manage the financials..
        </h2>
        <p className={`${styles.paragraph} text-gray-30 max-w-[470px] mt-5`}>
          With the perfect real estate investment, you can transform your
          financial future by building equity, enjoying property benefits, and
          maximizing returns. However, with numerous properties available in the
          market, finding the ideal real estate opportunity requires thoughtful
          consideration.
        </p>
      </div>

      {/* <Button styles={`mt-10`} /> */}

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Business;
