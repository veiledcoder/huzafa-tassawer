import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="xl:text-2xl lg:text-2xl md:text-xl  font-bold text-black">Huzafa<span className="text-blue-500">Tassawer</span></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ease-in-out px-4 pb-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#home" className="block text-white py-2">Home</a>
        <a href="#about" className="block text-white py-2">About</a>
        <a href="#projects" className="block text-white py-2">Projects</a>
        <a href="#skills" className="block text-white py-2">Skills</a>
        <a href="#contact" className="block text-white py-2">Contact</a>
      </div>
    </nav>
  );
};


