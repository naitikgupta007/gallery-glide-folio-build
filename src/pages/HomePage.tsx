
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  // Get featured projects or first 3 projects
  const featuredProjects = projects
    .filter(project => project.featured)
    .slice(0, 3);
  
  const displayProjects = featuredProjects.length ? featuredProjects : projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              John Doe
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Freelance Illustrator & Designer
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-portfolio-primary hover:bg-blue-600">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-portfolio-dark">Featured Projects</h2>
            <Link 
              to="/projects" 
              className="text-portfolio-primary hover:text-blue-600 font-medium flex items-center gap-1 group"
            >
              View All Projects 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-portfolio-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-portfolio-dark mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-8">
              I'm a freelance illustrator and designer with over 8 years of experience creating
              stunning visuals for brands and publications worldwide. My work focuses on
              blending traditional techniques with digital innovation.
            </p>
            <Button asChild className="bg-portfolio-primary hover:bg-blue-600">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-portfolio-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-white/90 mb-8">
              Have a project in mind? I'm currently available for freelance work.
              Let's create something amazing together.
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
