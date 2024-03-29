import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 max-width padding-container text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="text-center md:text-left max-w-md">
          <a href="/" className="mb-6 inline-block">
            <img src="/Logo1.png" alt="logo" width={100} height={50} />
          </a>
          <p className="text-gray-300">
            Someone will visit a website because they are interested in the
            content available on the website.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-8 xl:gap-16">
          {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
              <ul className="text-gray-300">
                {columns.links.map((link) => (
                  <li key={link}>
                    <a href="/" className="hover:text-blue-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}

          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <ul className="text-gray-300">
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <li key={link.label} className="flex items-center gap-4">
                  <p className="whitespace-nowrap">{link.label}:</p>
                  <p className="text-blue-400">{link.value}</p>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={SOCIALS.title}>
            <ul className="flex gap-4 text-white">
              {SOCIALS.links.map((link, index) => (
                <li key={link}>
                  <a
                    href={SOCIALS.goto[index]} // Set the href to the corresponding link from SOCIALS.goto
                    className="hover:text-blue-400 bg-white text-white"
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Recommended for security and performance
                  >
                    <img
                      src={link}
                      alt="logo"
                      width={24}
                      height={24}
                      className=" "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8" />

      <p className="text-center text-gray-300 mt-8">
        Property Platform 2024 | All rights reserved
      </p>
      <a href="https://www.instagram.com/tech_iota?igsh=MXR1dzZlbWY4YTVucQ==">
        <p className="text-center text-blue-500 mt-8">
          Developed By team TechIota
        </p>
      </a>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-lg text-white ">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
