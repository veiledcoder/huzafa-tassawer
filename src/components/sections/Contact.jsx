import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-grey py-14 px-4 sm:px-6 md:px-10"
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-8 sm:mb-10">
          Contact Me
        </h2>

        <div className="bg-grey w-full p-4 sm:p-5 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500 space-y-3 sm:space-y-5 max-w-md mx-auto">
          {/* Phone */}
          <div className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
            <MdPhone className="text-blue-400 text-lg sm:text-xl mt-1" />
            <p>
              <span className="hidden sm:inline font-semibold">Phone: </span>
              +92 332 5196462
            </p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
            <MdEmail className="text-blue-400 text-lg sm:text-xl mt-1" />
            <p>
              <span className="hidden sm:inline font-semibold">Email: </span>
              tassawerhuzafa@gmail.com
            </p>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
            <FaWhatsapp className="text-blue-400 text-lg sm:text-xl mt-1" />
            <p>
              <span className="hidden sm:inline font-semibold">WhatsApp: </span>
              +92 332 5196462
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
