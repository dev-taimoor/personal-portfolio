// components/Portfolio.tsx
'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 dark:bg-gray-900/50 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-4">Portfolio</h2>
          <p className="dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Explore my recent projects and see how I bring ideas to life through design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25'
                  : 'dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 bg-gray-200 text-gray-700 hover:text-orange-600 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl dark:bg-gray-800/50 dark:border-gray-700/50 bg-white border border-gray-300/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl dark:hover:shadow-orange-500/10 hover:shadow-orange-500/5"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-orange-500 font-medium">{project.category}</span>
                  <div className="flex space-x-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 dark:bg-gray-700 bg-gray-300 rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-400 transition-colors z-10"
                        aria-label="View project"
                      >
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <button className="w-8 h-8 dark:bg-gray-700 bg-gray-300 rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                        <ExternalLink size={16} />
                      </button>
                    )}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 dark:bg-gray-700 bg-gray-300 rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-400 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={16} />
                      </a>
                    ) : (
                      <button className="w-8 h-8 dark:bg-gray-700 bg-gray-300 rounded-full flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 dark:hover:bg-gray-600 hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                        <Github size={16} />
                      </button>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">{project.title}</h3>
                {project.description && (
                  <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed">{project.description}</p>
                )}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-200">
            Load More Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;