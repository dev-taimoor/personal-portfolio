// components/Services.tsx
'use client';

import { useState } from 'react';
import { services } from '../data';
import { Service } from '../types';
import DynamicIcon from './ui/DynamicIcon';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 dark:bg-gray-900/50 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-4">Services</h2>
          <p className="dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            I offer a comprehensive range of development services to help bring your ideas to life
            with creativity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service) => (
            <div
              key={service.id}
              className={`relative p-8 dark:bg-gray-800/50 bg-white dark:border-gray-700/50 border border-gray-300/50 rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl dark:hover:shadow-orange-500/10 hover:shadow-orange-500/5 ${
                hoveredService === service.id ? 'dark:border-orange-500/50 border-orange-500/30' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <DynamicIcon name={service.icon} size={32} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">{service.title}</h3>
              <p className="dark:text-gray-400 text-gray-600 leading-relaxed">{service.description}</p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl transition-opacity duration-300 ${
                hoveredService === service.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;