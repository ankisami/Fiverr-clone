import "./ProjectCard.scss";
//libs
import { Link } from "react-router-dom";
//models
import { Project } from "~/models/project.types";

type Props = {
  project: Project;
};
function ProjectCard({ project }: Props) {
  return (
    <Link to="/" className="projectCard">
      <img src={project.img} alt="project" />
      <div className="info">
        <img src={project.pp} alt="" />
        <div className="texts">
          <h2>{project.cat}</h2>
          <span>{project.username}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
