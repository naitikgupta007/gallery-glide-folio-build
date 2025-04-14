
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const project = projects.find((p) => p.id === id);
  
  // Get previous and next project IDs for navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  
  useEffect(() => {
    // Reset active image when project changes
    setActiveImageIndex(0);
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
    
    // Redirect to projects page if project not found
    if (!project && id) {
      navigate("/projects");
    }
  }, [id, project, navigate]);
  
  if (!project) {
    return null;
  }

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center mb-8">
              <Link 
                to="/projects"
                className="text-portfolio-primary hover:text-blue-600 font-medium flex items-center gap-1 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Link>
            </div>
            
            <h1 className="text-4xl font-bold text-portfolio-dark mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="bg-portfolio-secondary text-portfolio-dark px-3 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-gray-600">{project.description}</p>
          </div>
          
          {/* Project Gallery */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg mb-4">
              <img
                src={project.images[activeImageIndex]}
                alt={`${project.title} - Image ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`overflow-hidden rounded-md ${
                      activeImageIndex === index 
                        ? "ring-2 ring-portfolio-primary" 
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Project Content */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none">
              <h2>About this project</h2>
              <p>{project.content}</p>
            </div>
          </div>
          
          {/* Project Navigation */}
          <div className="max-w-4xl mx-auto flex justify-between">
            {prevProject ? (
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <Link to={`/projects/${prevProject.id}`}>
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Project</span>
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
            
            {nextProject ? (
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <Link to={`/projects/${nextProject.id}`}>
                  <span>Next Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetailPage;
