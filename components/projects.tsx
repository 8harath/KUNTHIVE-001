"use client";

import { useState } from "react";
import { projects, categories, type ProjectCategory } from "@/lib/projects-data";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen py-20 md:py-32 bg-background relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient font-extralight mb-4">
            Featured <i className="font-light">Projects</i>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/60 max-w-[600px] mx-auto">
            A collection of my recent work across web development, design, and tools
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className={`
                px-6 py-2.5 font-mono text-sm uppercase tracking-wide
                border-2 border-foreground transition-all duration-200
                ${
                  activeCategory === category.id
                    ? "bg-foreground text-background translate-x-0.5 translate-y-0.5 shadow-none"
                    : "bg-background text-foreground hover:translate-x-0.5 hover:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Neobrutalist Card */}
              <div className="bg-background border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300 h-full flex flex-col">
                {/* Project Image Placeholder */}
                <div className="relative w-full aspect-video bg-foreground/5 border-b-4 border-foreground overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-6xl font-bold text-foreground/10">
                    {project.id}
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="font-sentient text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-mono text-sm text-foreground/70 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border-2 border-foreground bg-background font-mono text-xs uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t-2 border-foreground/20">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-sm uppercase tracking-wide hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-sm uppercase tracking-wide hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show count */}
        <div className="text-center mt-12 font-mono text-sm text-foreground/60">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
