import { useQuery } from "@apollo/client";

import "./Projects.css";
import Title from "../Title";
import FlexContainer from "../FlexContainer";
import ProjectCard from "../ProjectCard";
import QUERY from "../../queries";
import { Row } from "react-bootstrap";

const Projects = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  // if (error) {
  //   return (
  //     <div class="alert alert-danger" role="alert">
  //       A simple danger alert—check it out!
  //     </div>
  //   );
  // }

  return (
    <FlexContainer position="center" id="projects">
      <div className="project-section">
        <Title text="PROJECTS" />
        <Row sm={8} md={4} xl={4} className="g-0 justify-content-center">
          {data.repos.map((repo) => {
            return <ProjectCard repo={repo} />;
          })}
        </Row>
      </div>
    </FlexContainer>
  );
};

export default Projects;
