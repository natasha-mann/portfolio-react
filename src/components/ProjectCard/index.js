import Card from "react-bootstrap/card";

import "./ProjectCard.css";
import transformTitle from "../../utils/transformTitle";

const ProjectCard = ({ repo }) => {
  const title = transformTitle(repo.name);
  return (
    <Card className="project-card">
      <a
        href={repo.homepage}
        role="button"
        target="_blank"
        rel="noreferrer"
        className="project-image"
      >
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/natasha-mann/${repo.name}/${repo.branch}/repo-img.png`}
          alt={repo.name}
          height="200"
        />
      </a>
      <Card.Body className="project-card-body">
        <div className="card-content">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{repo.description}</p>
        </div>
        <hr />
        <div className="gap-2 d-flex pt-2 justify-content-center">
          <a
            className="
                        btn 
                        project-btn
                        mx-1
                      "
            href={repo.gitHubUrl}
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
          <a
            className="
                        btn
                        project-btn
                        mx-1
                      "
            href={repo.homepage}
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Live App
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
