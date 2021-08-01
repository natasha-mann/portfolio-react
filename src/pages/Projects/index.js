import { useQuery } from "@apollo/client";
import { Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import "./Projects.css";
import Title from "../../components/Title";
import FlexContainer from "../../components/FlexContainer";
import ProjectCard from "../../components/ProjectCard";
import QUERY from "../../queries";
import ProjectCarousel from "../../components/ProjectCarousel";

const Projects = () => {
  const { loading, error, data } = useQuery(QUERY);

  return (
    <FlexContainer position="center" padding="true" id="projects">
      <div className="project-section">
        <Title text="PROJECTS" />
        <Row sm={8} md={4} xl={4} className="g-0 justify-content-center">
          {data &&
            data.repos.map((repo) => {
              return <ProjectCard key={uuidv4()} repo={repo} />;
            })}

          {loading && (
            <div className="pb-5 text-center">
              <div className="spinner-border " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </Row>
        {error && (
          <div className="mx-auto">
            <div
              className="alert alert-danger mx-auto text-center"
              role="alert"
            >
              <p>
                Oh no! The server can't fetch all the project data at the
                moment.
              </p>
              <p>
                Take a look at my most recent project below and head to{" "}
                <a
                  href="https://github.com/natasha-mann/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                to view the rest!
              </p>
            </div>

            <ProjectCarousel />
          </div>
        )}
      </div>
    </FlexContainer>
  );
};

export default Projects;
