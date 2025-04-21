"use client";
import { useState, useRef, useEffect } from "react";
import { Project } from "../DataStructure";
import VideoModal from "./VideoModal";
import { useScrollAnimation } from "./useScrollAnimation";

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectsRef, inView] = useScrollAnimation<HTMLDivElement>(0.1);

  // Generate unique pattern designs for each project
  const getPatternStyle = (index: number) => {
    const patterns = [
      "radial-gradient(circle at top left, rgba(220, 38, 38, 0.1) 0%, transparent 40%)",
      "linear-gradient(45deg, rgba(220, 38, 38, 0.05) 25%, transparent 25%, transparent 50%, rgba(220, 38, 38, 0.05) 50%, rgba(220, 38, 38, 0.05) 75%, transparent 75%, transparent)",
      "repeating-linear-gradient(-45deg, rgba(220, 38, 38, 0.1) 0, rgba(220, 38, 38, 0.1) 1px, transparent 3px, transparent 6px)",
      "linear-gradient(90deg, rgba(220, 38, 38, 0.07) 0%, transparent 50%, rgba(220, 38, 38, 0.07) 100%)",
      "radial-gradient(circle at bottom right, rgba(220, 38, 38, 0.1) 0%, transparent 40%)",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <>
      <div 
        ref={projectsRef} 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
      >
        {projects.map((project, idx) => (
          <div 
            key={project.id}
            className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-b-4 border-red-500 animate-${idx % 2 === 0 ? 'slideInLeft' : 'slideInRight'}`}
            style={{ 
              animationDelay: `${idx * 0.2}s`, 
              animationFillMode: 'both',
              background: `white ${getPatternStyle(idx)}`
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-video bg-gray-100 relative">
              <video 
                src={project.videoUrl}
                className="w-full h-full object-cover"
                muted
                playsInline
                onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                onMouseOut={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.pause();
                  video.currentTime = 0;
                }}
              />
              
              {/* Unique Video Container Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-red-900/40 to-black/30 hover:bg-black/10 transition-colors">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transform transition-transform hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-red-500 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-red-500 rounded-br-lg"></div>
            </div>
            <div className="p-5 relative">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <div className="w-12 h-1 bg-red-500 rounded-full"></div>
              <div className="absolute -bottom-3 right-5 w-20 h-20 bg-red-50 rounded-full -z-10"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <VideoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}