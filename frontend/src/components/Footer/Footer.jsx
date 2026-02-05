import Logo from "./../../assets/images/logo3.png";
import React, { useContext } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Newsletter from "../../shared/Newsletter";
import { AuthContext } from "../../context/AuthContext";

const Footer = () => {
  const { role } = useContext(AuthContext);

  return (
    <>
      {role === "admin" ? null : (
        <footer className="bg-[#DCE7F3] text-gray-800 px-5 py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Logo + Contact */}
            <div className="flex flex-col items-center md:items-start">

              <img
                src={Logo}
                alt="Trips Travels Logo"
                className="
                  h-40 w-[24rem]
                  md:h-44 md:w-[28rem]
                  lg:h-48 lg:w-[32rem]
                  object-contain
                "
              />

              {/* Contact Info */}
              <div className="flex flex-col mt-3 text-center md:text-left text-sm">
                <p className="mb-1">Address: 123 Travel St, City, Country</p>
                <p className="mb-1">Phone: +1 234 567 890</p>
                <p className="mb-1">Email: info@travaa.com</p>
                <p className="mt-1 text-xs">
                  &copy; 2026 Samruddhi Varkhade. All rights reserved.
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <Newsletter />

            {/* Social Media */}
            <div className="flex md:flex-col gap-5 text-lg">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-700 hover:text-sky-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 transition">
                <FaYoutube />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition">
                <FaGithub />
              </a>
            </div>

          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
