"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-10">
        <div 
          className={`absolute inset-0 z-0 bg-cover bg-center bg-fixed transform scale-105 transition-all duration-3000 ${loaded ? 'opacity-85' : 'opacity-0'}`}
          style={{ 
            backgroundImage: "url('/images/construction-hero.jpeg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-black/50 to-transparent"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-red-500/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-40 w-16 h-16 border-4 border-red-600/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className={`relative z-20 container mx-auto transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-2xl ml-0 md:ml-12 backdrop-blur-sm bg-white/80 p-10 rounded-lg shadow-2xl border-l-4 border-red-600 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-red-600">Building</span> Your Vision, 
            <br />Crafting Your Future
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Premium construction services that transform your spaces with precision 
            craftsmanship and attention to detail. See how we bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="bg-red-600 text-white py-4 rounded-md font-medium hover:bg-red-700 transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              View Our Projects
            </a>
            <a 
              href="#contact" 
              className="relative overflow-hidden border-2 border-red-600 text-red-600 py-4 rounded-md font-medium transition-colors text-center shadow-md hover:shadow-lg group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Free Consultation</span>
              <div className="absolute inset-0 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>
          
          {/* Trust badges */}
          <div className="mt-10 flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center transform hover:scale-105 transition-transform">
              <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center transform hover:scale-105 transition-transform">
              <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>5-Star Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}