"use client";
import { useRef, useEffect, useState } from "react";

export default function ServicesSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const services = [
    {
      title: "Custom Home Construction",
      description: "Design and build your dream home—from foundations to finishes.",
      icon: "🏡"
    },
    {
      title: "Commercial Build‑Outs",
      description: "Tenant improvements and new construction for offices, retail, and restaurants.",
      icon: "🏢"
    },
    {
      title: "Renovations & Remodels",
      description: "Kitchen, bathroom, basement and whole‑home renovations with premium materials.",
      icon: "🔨"
    },
    {
      title: "Flooring & Tile",
      description: "Hardwood, tile, laminate and LVP installed with precision and care.",
      icon: "🛠️"
    },
    {
      title: "Painting & Finishes",
      description: "Interior/exterior painting, drywall repairs, trim work and decorative finishes.",
      icon: "🎨"
    },
    {
      title: "Project Management",
      description: "End‑to‑end coordination to keep your build on schedule and on budget.",
      icon: "📋"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50 z-0"></div>
      
      {/* Red accent elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-100 rounded-full blur-2xl opacity-60"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Our <span className="text-red-600">Services</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 border-b-4 border-red-600 transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <div className="w-10 h-1 bg-red-600/30 rounded-full mb-3"></div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}