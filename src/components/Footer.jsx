import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[url('/footer1.jpg')] bg-cover text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-3">
          <h2 className="text-xl font-bold border-b border-gray-600 pb-2">
            Contact Info
          </h2>
          <p className="text-gray-300">📧 support@skillsphere.com</p>
          <p className="text-gray-300">📞 +880 1XXXXXXXXX</p>
          <p className="text-gray-300">📍 Nikunja-2, Dhaka, Bangladesh</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold border-b border-gray-600 pb-2">
            Social Links
          </h2>
          <div className="flex flex-col gap-2 text-gray-300">
            <a className="hover:text-blue-400 flex gap-2 items-center transition"><FaFacebook /> Facebook</a>
            <a className="hover:text-sky-400 flex gap-2 items-center transition"><FaTwitter /> Twitter</a>
            <a className="hover:text-blue-500 flex gap-2 items-center transition"><FaLinkedin /> LinkedIn</a>
            <a className="hover:text-red-400 flex gap-2 items-center transition"><FaYoutube /> YouTube</a>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold border-b border-gray-600 pb-2">
            Legal
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-5 text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">SkillSphere</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
