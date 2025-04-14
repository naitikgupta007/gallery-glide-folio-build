
import { useState } from "react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  // Get unique categories
  const allCategories = ["All", ...new Set(projects.flatMap(project => project.categories))];
  
  // Filter projects by category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-portfolio-dark mb-4">My Projects</h1>
            <p className="text-lg text-gray-600">
              Explore my recent work and creative projects.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-portfolio-primary text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-600">
                No projects found in this category.
              </h3>
              <p className="mt-2 text-gray-500">
                Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
