"use client";
import { useEffect, useState } from "react";
import { Project } from "../DataStructure";

interface VideoModalProps {
  project: Project;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Animation timing - set to true after a short delay to trigger animation
    setTimeout(() => setIsOpen(true), 50);
    
    // Close on escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Delay actual closing to allow animation to complete
  };

  return (
    <div 
      className={`fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b bg-gradient-to-r from-red-50 to-white">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-red-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex justify-center relative">
            <div className="absolute -inset-2 rounded-xl bg-red-100 -z-10"></div>
            <div className="absolute top-4 right-4 w-16 h-16 border-4 border-red-500/20 rounded-full"></div>
            <video
              src={project.videoUrl}
              controls
              autoPlay
              className="w-[300px] h-[400px] rounded shadow-lg"
            />
          </div>
          <div className="mt-8">
            <h4 className="font-medium mb-2 text-red-600">About this project</h4>
            <p className="text-gray-700">{project.description}</p>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button 
              onClick={handleClose}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}