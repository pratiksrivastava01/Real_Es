import Cardss from "./Cardss";

const Barasat = () => {
  return (
    <>
      <h1 className="mt-10 bold-32 font-bold">
        {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Find the best Properties
        </span> */}
      </h1>
      <div className="mt-10 flexBetween sm:flex-col gap-5">
        <Cardss
          imageUrl="/properties/Barasat5.jpg"
          price={"₹3.35 Crore"}
          address={"Purba Jadavpur"}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
          number={9339222467}
        />

        <Cardss
          imageUrl="/properties/Barasat2.jpg"
          price={"₹68 Lakhs"}
          address={"Barasat Madhumurali"}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
          number={7920932387}
        />
        <Cardss
          imageUrl="/properties/Barasat3.jpg"
          price={"₹1.4 Crore"}
          address={"Barasat Nabapally"}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
          number={7920932387}
        />
      </div>
      <div className="mt-10 flexBetween sm:flex-col gap-5">
        <Cardss
          imageUrl="/properties/Barasat4.jpg"
          price={"₹32 Lakhs"}
          address={"Duttakpur"}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
          number={7920932387}
        />
        <Cardss
          imageUrl="/properties/Barasat1.jpg"
          price={"₹45 Lakhs"}
          address={"Barasat indrolok  yogashram."}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
          isPopular={"true"}
          number={7920932387}
        />

        <Cardss
          imageUrl="/house-bg.jpg"
          price={"₹15,000"}
          address={"8, Alipore Park Pl, Alipore"}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
        />
      </div>
    </>
  );
};

export default Barasat;
