import React from 'react';

export const Services = () => {
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Social media marketing (Facebook, Instagram, YouTube), Meta Ads, audience engagement, paid campaign strategy',
    },
    {
      title: 'Graphic Design',
      description: 'Canva, Photoshop – creating banners, reels, event posters, brand visuals',
    },
    {
      title: 'Video Editing',
      description: 'CapCut, Premiere Pro – short form and long-form videos for educational and event-based content',
    },
    {
      title: 'Website & Branding Support',
      description: 'Assisting in designing educational websites and setting up social channels',
    },
    {
      title: 'SEO & Content Planning',
      description: 'Optimizing pages and campaigns for visibility and organic reach',
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-20 bg-grey"
      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          My Services
        </h2>

        {/* Responsive Grid with Tailwind */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border hover:-translate-y-1 border-blue-500/50 transition-all bg-blue-500"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-white text-sm font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
