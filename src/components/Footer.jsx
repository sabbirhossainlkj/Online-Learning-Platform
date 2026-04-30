import React from "react";

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
          <p className="text-gray-300">📍 Kaliganj, Dhaka, Bangladesh</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold border-b border-gray-600 pb-2">
            Social Links
          </h2>
          <div className="flex flex-col gap-2 text-gray-300">
            <a className="hover:text-blue-400 transition">🔵 Facebook</a>
            <a className="hover:text-sky-400 transition">🐦 Twitter</a>
            <a className="hover:text-blue-500 transition">💼 LinkedIn</a>
            <a className="hover:text-red-400 transition">▶ YouTube</a>
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

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-5 text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">SkillSphere</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
