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
  const cardsToShow = 2;

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

        <div
          className="relative group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {Array(cardsToShow)
                .fill(0)
                .map((_, offset) => {
                  const actualIndex = (index + offset) % testimonials.length;
                  const testimonial = testimonials[actualIndex];
                  return (
                    <motion.div
                      key={actualIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="p-6 border border-blue-500/50 rounded-xl bg-blue-400 shadow-md"
                    >
                      <p className="text-white text-lg italic mb-4">
                        “{testimonial.text}”
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.author}
                      </p>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </div>

          {/* Arrow Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between">
            <button
              onClick={prevSlide}
              className="bg-blue-500/90 hover:bg-blue-600 text-white p-2 rounded-full shadow transition hidden group-hover:block"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-500/90 hover:bg-blue-600 text-white p-2 rounded-full shadow transition hidden group-hover:block"
            >
              <ChevronRight />
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
