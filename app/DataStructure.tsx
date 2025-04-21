export interface Project {
    id: string;
    title: string;
    description: string;
    videoUrl: string; 
    thumbnail?: string;
    category: string;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    company: string;
    comment: string;
    avatar?: string;
    rating: number;
  }
  
  export const projects: Project[] = [
    {
      id: "1",
      title: "Bathroom Renovation",
      description: "Complete bathroom transformation featuring premium ceramic tile installation, custom shower enclosure, and elegant fixtures. Our team delivered flawless tile work with precision grout lines and waterproof sealing.",
      videoUrl: "/videos/bath.mp4",
      category: "commercial"
    },
    {
      id: "2",
      title: "Flooring Installation",
      description: "Professional installation of hardwood, tile, and laminate flooring with precision and meticulous attention to detail",
      videoUrl: "/videos/section.mp4",
      category: "commercial"
    },
    {
      id: "3",
      title: "Bathroom Upgrade",
      description: "Modern bathroom upgrade with overhead lighting and full-wall tiling.",
      videoUrl: "/videos/video1.mov",
      category: "commercial"
    },
    {
      id: "4",
      title: "Home Remodeling",
      description: "Comprehensive home remodel for kitchen, bath & living spaces.",
      videoUrl: "/videos/video2.mov",
      category: "commercial"
    },
    {
      id: "5",
      title: "Complete Home Makeover",
      description: "Fully remodeled home with fresh paint, new flooring, and updated fixtures throughout.",
      videoUrl: "/videos/video3.mov",
      category: "commercial"
    },
];
  
  export const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Manuel Hermenegildo",
      company: "Homeowner",
      comment: "J&O Construction transformed our outdated kitchen into a modern masterpiece. Their attention to detail was outstanding!",
      rating: 5
    },
    {
      id: "2",
      name: "Miguel Jhonson",
      company: "Homeowner",
      comment: "We've worked with many contractors over 10 months, but J&O's quality of work and professionalism stands out from the rest.",
      rating: 5
    },
    {
      id: "3",
      name: "Josue Lopez",
      company: "Independent Contractor",
      comment: "The renovations J&O completed increased our property value significantly. Would definitely hire again!",
      rating: 5
    },
    {
      id: "4",
      name: "David Martinez",
      company: "Private Property Owner",
      comment: "On time, on budget, and excellent communication throughout the entire project.",
      rating: 4
    }
  ];
  
  export const serviceCategories = [
    "Residential", 
    "Commercial", 
    "Renovations", 
    "New Construction"
  ];