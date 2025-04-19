import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-grey py-20 px-4 sm:px-6 md:px-10"
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-10 sm:mb-12">
          Contact Me
        </h2>

        <div className="bg-grey w-full p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-blue-500 space-y-5 sm:space-y-6 max-w-xl mx-auto">
          {/* Phone */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-base sm:text-lg text-gray-500">
            <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
              <MdPhone className="text-blue-400 text-xl sm:text-2xl" />
            </div>
            <p><strong>Phone:</strong> +92 332 5196462</p>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-base sm:text-lg text-gray-500">
            <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
              <MdEmail className="text-blue-400 text-xl sm:text-2xl" />
            </div>
            <p><strong>Email:</strong> tassawerhuzafa@gmail.com</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-base sm:text-lg text-gray-500">
            <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0">
              <FaWhatsapp className="text-blue-400 text-xl sm:text-2xl" />
            </div>
            <p><strong>WhatsApp:</strong> +92 332 5196462</p>
          </div>
        </div>
      </div>
    </section>
  );
};
