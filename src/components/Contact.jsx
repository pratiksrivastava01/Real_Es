import { MdEmail } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyVd53_gggiT0qczzcGzzKkdkA8B5elPXVUNaJ7TT2FJfCdVyJuLFc0ZSFqY5hvKh5o/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Form submitted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });

    alert("Form submitted successfully");
    window.location.reload();
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  return (
    <div className="p-4 mt-5 sm:mt-0 max-container padding-container mb-12">
      <div className="flex justify-center flex-col items-center padding-container">
        <h1 className="bold-40  text-blue-900 sm:text-3xl">Contact Us</h1>
        <span>Fill out the form to get an instant callback from us</span>
      </div>

      <div className="mt-5 sm:mt-0">
        <div className="flex bg-rd justify-center">
          <div className="w-full sm:w-full md:w-[80%] lg:w-[60%] xl:w-[50%] gap-4 items-center">
            <form
              className="flex flex-col justify-center gap-4 p-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col  gap-4">
                <div className="text-black text-base leading-6 font-normal tracking-tight border-box cursor-text inline-flex items-center relative font-rubik bg-gray-10 p-4 gap-2 rounded-xl">
                  <MdEmail />
                  <input
                    placeholder={"Your Name"}
                    name="Name"
                    type="text"
                    required
                    className="bg-gray-10 w-full sm:w-[10rem] outline-none placeholder-gray-500 focus:placeholder-opacity-50"
                  />
                </div>
                <div className="text-black text-base leading-6 font-normal tracking-tight border-box cursor-text inline-flex items-center relative font-rubik bg-gray-10 p-4 gap-2 rounded-xl">
                  <MdEmail />
                  <input
                    placeholder={"Your Email"}
                    name="Email"
                    type="text"
                    required
                    className="bg-gray-10 w-full sm:w-[50%] outline-none placeholder-gray-500 focus:placeholder-opacity-50"
                  />
                </div>
              </div>
              <div className="flex gap-2 p-4 bg-gray-10 rounded-xl">
                <FaRegComment />
                <textarea
                  placeholder="Comments"
                  name="Message"
                  className="bg-gray-10 outline-none h-36 rounded-xl placeholder-gray-500 focus:placeholder-opacity-50 w-full overflow-auto resize-none"
                />
              </div>
              <div>
                <input
                  name="Name"
                  type="submit"
                  value="Send"
                  className="bg-blue-900 text-white w-full sm:w-28 p-4 rounded-xl cursor-pointer font-bold"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
