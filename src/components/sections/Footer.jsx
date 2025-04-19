import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-grey py-4 mt-16 border-t border-gray-400">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        {/* Left Side: Text */}
        <p className=" text-gray-500 hover:text-blue-500 hover:font-bold">
          <span className=''>Syed</span> Huzafa Tassawer
        </p>

        {/* Right Side: Social Links */}
        <div className="flex space-x-3  text-xl text-gray-400">
          <a href="https://www.facebook.com/huzafatassawer3?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/huzafa_tassawer?igsh=MWE2MW5ncnQ3ZGVsYQ==" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noreferrer" className="hover:text-green-500 transition-colors">
            <FaWhatsapp />
          </a>
          <a href="https://pk.linkedin.com/in/syed-huzafa-tassawer-394ba7261" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition-colors">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};
