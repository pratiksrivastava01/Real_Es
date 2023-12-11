const Spealize = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col justify-between items-center md:flex-row">
          <img
            src="/feature-banner-1.jpg"
            alt="banner"
            className="rounded-3xl w-full md:w-1/2 lg:w-2/5"
          />
          <div className="w-full md:w-1/2 sm:mt-5">
            <h1 className="bold-40 md:bold-64">
              We Specialize in Quality Home Renovation
            </h1>
            <p className="mt-6 md:mt-10">
              Looking to renovate your home to reflect your style and
              personality? Look no further than our team of experts who
              specialize in quality home renovations to transform your space
              into a dream home you'll love. From design to execution.
            </p>
            {renderCheckPoints()}
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col justify-between items-center md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="bold-40 md:bold-64">
              We Specialize in Quality Home Renovation
            </h1>
            <p className="mt-6 md:mt-10">
              Looking to renovate your home to reflect your style and
              personality? Look no further than our team of experts who
              specialize in quality home renovations to transform your space
              into a dream home you'll love. From design to execution.
            </p>
            {renderCheckPoints()}
          </div>
          <img
            src="/feature-banner-2.jpg"
            alt="banner"
            className="rounded-3xl w-full md:w-1/2 lg:w-2/5 sm:mt-10"
          />
        </div>
      </section>
    </>
  );
};

const renderCheckPoints = () => (
  <>
    <div className="flex justify-between mt-6 md:mt-10">
      {renderCheckPoint("Smart Homes")}
      {renderCheckPoint("Smart Homes")}
    </div>
    <div className="flex justify-between mt-6 md:mt-10">
      {renderCheckPoint("Smart Homes")}
      {renderCheckPoint("Smart Homes")}
    </div>
  </>
);

const renderCheckPoint = (label) => (
  <div className="flex items-center gap-2">
    <img src="/checked.png" alt="check" width={25} height={25} />
    <p>{label}</p>
  </div>
);

export default Spealize;
