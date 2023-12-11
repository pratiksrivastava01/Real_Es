const Details = () => {
  return (
    <section className="max-container padding-container  gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="cursor-pointer flex sm:flex-col  bg-gray-10 rounded-lg p-2">
        <img
          src="/1.jpg"
          alt=""
          height={300}
          width={500}
          className="rounded-lg "
        />
        <div className="ml-10 sm:ml-0">
          <h1 className="bold bold-32 text-blue-400">Enter Name - Type 1</h1>
          <p className="mt-5 sm:text-sm text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor
            molestiae sint voluptate asperiores cupiditate sapiente, non
            reprehenderit tempora! Illum cum magnam eius libero assumenda error
            enim aperiam minus expedita? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro dolores dolor explicabo dolorum nihil
            beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            vel quos voluptatum sit magni voluptas doloremque deleniti
            exercitationem incidunt dolor? Lorem ipsum dolor sit amet.
          </p>
          <p className="mt-5 font-bold">Lear More!</p>
        </div>
      </div>
      <div className="cursor-pointer mt-10 flex sm:flex-col  bg-gray-10 rounded-lg p-2">
        <img
          src="/1.jpg"
          alt=""
          height={300}
          width={500}
          className="rounded-lg "
        />
        <div className="ml-10 sm:ml-0">
          <h1 className="bold bold-32 text-blue-400">Enter Name - Type 1</h1>
          <p className="mt-5 sm:text-sm text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolor
            molestiae sint voluptate asperiores cupiditate sapiente, non
            reprehenderit tempora! Illum cum magnam eius libero assumenda error
            enim aperiam minus expedita? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro dolores dolor explicabo dolorum nihil
            beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            vel quos voluptatum sit magni voluptas doloremque deleniti
            exercitationem incidunt dolor? Lorem ipsum dolor sit amet.
          </p>
          <p className="mt-5 font-bold">Lear More!</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
