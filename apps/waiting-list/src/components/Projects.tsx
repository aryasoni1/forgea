"use client";

import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "SkillForge",
      subtitle: "Learning + Productivity Platform",
      description:
        "A comprehensive learning management system with AI-powered course recommendations, progress tracking, and collaborative features.",
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      image: "/api/placeholder/400/250",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "POS System",
      subtitle: "For Local Businesses",
      description:
        "Complete point-of-sale solution with inventory management, sales analytics, and multi-location support for retail businesses.",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
      image: "/api/placeholder/400/250",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "AI Task Engine",
      subtitle: "Intelligent Automation Platform",
      description:
        "AI-powered task automation platform that learns from user behavior to optimize workflows and increase productivity.",
      tech: ["Python", "FastAPI", "TensorFlow", "Docker"],
      image: "/api/placeholder/400/250",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build These Real Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work on production-ready applications that solve actual business
              problems. Each project is designed to teach you real-world
              development skills.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}
                  >
                    <span className="text-white text-xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {project.tech[0]}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                    View Project Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-8">
              These are just a few examples. We have dozens of real-world
              projects waiting for you.
            </p>
            <button
              onClick={() => {
                document.getElementById("waitlist-section")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              See All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
