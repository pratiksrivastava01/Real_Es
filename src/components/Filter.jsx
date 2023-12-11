const Filter = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-12">
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <h1 className="text-2xl font-bold mb-4 px-6 py-4 border-b border-gray-300 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                Flats for Sale in Kolkata
              </h1>
              <div className="flex flex-col p-6">
                {[...Array(10)].map((_, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition duration-300 mb-2"
                  >
                    Flats for Sale in Koramangala
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
