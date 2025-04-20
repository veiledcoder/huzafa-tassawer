import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Huzafa bhai helped us grow our Facebook page organically. His designs, regular posting strategy, and guidance created a strong impact for our cause.",
    author: "– Media Head, Team Aafia Official",
  },
  {
    text: "His dedication and ideas made our campaigns more professional. Our engagement increased without spending much on ads.",
    author: "– District Representative, Jamat-e-Islami Kashmir",
  },
  {
    text: "We were struggling with digital branding, but Huzafa’s support in launching our website and running Facebook ads really helped us attract students.",
    author: "– Admin, ZBTI",
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(nextSlide, 6000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index, paused]);

  return (
    <section className="py-20 bg-gray-100 px-4">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          What Clients Say
        </h2>

        {/* Desktop View (2 at a time) */}
        <div
          className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            {[0, 1].map((offset) => {
              const actualIndex = (index + offset) % testimonials.length;
              const testimonial = testimonials[actualIndex];
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 border-2 border-blue-500/80 rounded-xl bg-gray-200 shadow-md"
                >
                  <p className="text-gray-600 text-lg italic mb-4">
                    “{testimonial.text}”
                  </p>
                  <p className="text-sm font-semibold text-blue-500">
                    {testimonial.author}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile View (1 at a time with arrows) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="p-6 border-2 border-blue-500/80 rounded-xl bg-gray-200 shadow-md"
              >
                <p className="text-gray-600 text-base italic mb-4">
                  “{testimonials[index].text}”
                </p>
                <p className="text-sm font-semibold text-blue-500">
                  {testimonials[index].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows on mobile always visible */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-blue-500" : "bg-blue-200 hover:bg-blue-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
