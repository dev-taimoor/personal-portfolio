// components/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { socialLinks, stats, personalInfo } from '../data';
import { SocialLink, Stat } from '../types';
import DynamicIcon from './ui/DynamicIcon';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Vector */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.svg')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-gray-900 mb-4">
              Hi I am <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl dark:text-gray-300 text-gray-600 mb-8">
              {personalInfo.title}
            </h2>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {socialLinks.map((social: SocialLink) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 dark:bg-gray-800 bg-gray-200 rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 hover:text-orange-500 dark:hover:bg-gray-700 hover:bg-gray-300 transition-all duration-200 transform hover:scale-110"
                >
                  <span className="sr-only">{social.name}</span>
                  <DynamicIcon name={social.icon} size={20} />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat: Stat, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm dark:text-gray-400 text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform hover:scale-105"
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </a>
              <a
                href={personalInfo.cv}
                download
                className="inline-flex items-center justify-center px-8 py-3 border dark:border-gray-600 border-orange-300 dark:text-gray-300 text-orange-600 font-medium rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
              >
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end" ref={heroRef}>
            <div className="relative w-64 sm:w-80 lg:w-96">
              <div 
                className="relative w-full overflow-visible shadow-2xl group"
                style={{
                  aspectRatio: '520 / 860',
                }}
              >
                <div 
                  className="relative w-full h-full overflow-hidden border-4 border-orange-500/20"
                  style={{
                    borderRadius: '47% 47% 47% 47%',
                  }}
                >
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    style={{
                      mixBlendMode: 'luminosity',
                      filter: 'contrast(1.1) brightness(1.05)',
                    }}
                  />

                  {/* Subtle overlay for depth */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
                    style={{
                      borderRadius: '47% 47% 47% 47%',
                    }}
                  ></div>
                </div>

                {/* Decorative accent elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-red-500 rounded-full animate-pulse delay-1000 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 dark:text-gray-400 text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;