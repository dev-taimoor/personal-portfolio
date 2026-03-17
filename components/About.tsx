// components/About.tsx
'use client';

import { useState } from 'react';

import { Download, Award, Users, Briefcase, ChevronDown } from 'lucide-react';
import { skills, experiences, personalInfo } from '../data';
import { Skill, Experience } from '../types';
import DynamicIcon from './ui/DynamicIcon';

const About = () => {
  const [expandedExp, setExpandedExp] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedExp(expandedExp === id ? null : id);
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-4">About Me</h2>
          <p className="dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-4">
              I'm {personalInfo.name}, a passionate {personalInfo.title}
            </h3>
            <p className="dark:text-gray-400 text-gray-600 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 dark:bg-gray-800/50 rounded-xl">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold dark:text-white text-gray-900">5+</div>
                <div className="text-sm dark:text-gray-400 text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center p-4 dark:bg-gray-800/50 rounded-xl">
                <Briefcase className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold dark:text-white text-gray-900">10+</div>
                <div className="text-sm dark:text-gray-400 text-gray-600">Projects</div>
              </div>
            </div>

            <a
              href={personalInfo.cv}
              download
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 transform hover:scale-105"
            >
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-8 text-center">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill: Skill, index: number) => (
              <div key={index} className="p-6 dark:bg-gray-800/50 bg-gray-100/50 rounded-xl dark:border-gray-700/50 border border-gray-300/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <DynamicIcon name={skill.icon} size={32} className="mr-3 text-orange-500" />
                    <span className="dark:text-white text-gray-900 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-orange-500 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full dark:bg-gray-700 bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-8 text-center">Experience</h3>
          <div className="space-y-4">
            {experiences.map((exp: Experience) => (
              <div
                key={exp.id}
                className="p-6 dark:bg-gray-800/50 bg-gray-100/50 rounded-xl dark:border-gray-700/50 border border-gray-300/50 backdrop-blur-sm transition-all duration-300"
              >
                {/* Header - Always Visible */}
                <button
                  onClick={() => toggleExpanded(exp.id)}
                  className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 focus:outline-none"
                >
                  <div className="flex-1 text-left">
                    <h4 className="text-xl font-semibold dark:text-white text-gray-900">{exp.title}</h4>
                    <p className="text-orange-500 text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="dark:text-gray-400 text-gray-600 text-sm whitespace-nowrap">{exp.period}</span>
                    <ChevronDown
                      className={`w-5 h-5 dark:text-gray-400 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                        expandedExp === exp.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expandable Content */}
                {expandedExp === exp.id && (
                  <div className="mt-6 pt-6 dark:border-gray-700/50 border-t border-gray-300/50 animate-fadeIn">
                    <ul className="space-y-3">
                      {exp.accomplishments.map((accomplishment, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="text-orange-500 font-bold text-lg flex-shrink-0 mt-0.5">
                            •
                          </span>
                          <span className="dark:text-gray-300 text-gray-700 leading-relaxed">{accomplishment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;