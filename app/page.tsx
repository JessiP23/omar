"use client";

import HeroSection from "./components/HeroSection";
import FeaturedProjects from "./components/FeatureProjects";
import ServicesSection from "./components/ServiceSection";
import TestimonialsCarousel from "./components/TestimonialCarousel";
import ContactForm from "./components/ContactForm";
import { projects, testimonials } from "./DataStructure";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <HeroSection />
      
      <section id="projects" className="py-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-red-600">Featured</span> Projects
        </h2>
        <FeaturedProjects projects={projects} />
      </section>
      
      <ServicesSection />
      
      <section id="testimonials" className="py-8 bg-gradient-to-br from-red-50 to-white mx-0 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our <span className="text-red-600">Clients</span> Say
          </h2>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
      
      <section id="contact" className="py-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Get In <span className="text-red-600">Touch</span>
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}