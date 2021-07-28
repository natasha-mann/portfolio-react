import "./Projects.css";
import Title from "../Title";
import FlexContainer from "../FlexContainer";

const Projects = (props) => {
  return (
    <FlexContainer position="center" id="projects">
      <div className="section-container">
        <Title text="PROJECTS" />
        <div className="project-row"></div>
      </div>
    </FlexContainer>
  );
};

export default Projects;
