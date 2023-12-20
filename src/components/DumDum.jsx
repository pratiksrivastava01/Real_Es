import Cardss from "./Cardss";

const DumDum = () => {
  return (
    <>
      <h1 className="mt-10 bold-32 font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Find the best flats in Dum Dum
        </span>
      </h1>
      <div className="mt-10 flexBetween sm:flex-col gap-5">
        <Cardss
          imageUrl="/house-bg.jpg"
          price={"₹15,000"}
          address={"8, Alipore Park Pl, Alipore"}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
          isPopular={"true"}
        />
        <Cardss
          imageUrl="/house-bg.jpg"
          price={"₹15,000"}
          address={"8, Alipore Park Pl, Alipore"}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
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
      <div className="mt-10 flexBetween sm:flex-col gap-5">
        <Cardss
          imageUrl="/house-bg.jpg"
          price={"₹15,000"}
          address={"8, Alipore Park Pl, Alipore"}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
        />
        <Cardss
          imageUrl="/house-bg.jpg"
          price={"₹15,000"}
          address={"8, Alipore Park Pl, Alipore"}
          bedCount={"4"}
          bathCount={"2"}
          area={"6 x 7.5 m²"}
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

export default DumDum;
