
import { Link } from "react-router-dom";
import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="project-card-image"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-white/90 text-sm line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.categories.map((category, index) => (
            <span key={index} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
              {category}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
