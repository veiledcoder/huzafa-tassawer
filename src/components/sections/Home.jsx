import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-12 py-2 md:py-10 gap-2 md:gap-8"
    >
      {/* Left Side - Text */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Hi, I'm Syed Huzafa Tassawer
        </h1>

        <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0">
          I’m a passionate digital marketing specialist with a unique blend of Islamic academic background and modern media expertise.
        </p>

        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-md"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center md:justify-start space-x-4 text-xl lg:text-2xl text-gray-400 pt-2">
          <a
            href="https://www.facebook.com/huzafatassawer3?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/huzafa_tassawer?igsh=MWE2MW5ncnQ3ZGVsYQ=="
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/yourwhatsapplink"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://pk.linkedin.com/in/syed-huzafa-tassawer-394ba7261"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg pt-12 md:pt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="./huzafa.jpg"
          alt="Syed Huzafa Tassawer"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 hover:scale-105 object-cover object-center"
        />
      </motion.div>
    </section>
  );
};
