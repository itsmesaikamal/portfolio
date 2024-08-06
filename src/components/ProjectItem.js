import styled from 'styled-components';
import 'animate.css';

const ProjectItemContainer = styled.li`
  background-color: #1c1c1c;
  color: #fff;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  width: calc(50% - 2rem);

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectItemImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const ProjectItemDetailsContainer = styled.div``;

const ProjectItemTitle = styled.h1`
  font-size: 1.5rem;
  color: #ffcc00;
`;

const ProjectItemDescription = styled.p`
  font-size: 1rem;
`;

const ProjectItem = props => {
  const {projectDetails} = props;
  const {projectId, imageURL, description, title} = projectDetails;

  return (
    <ProjectItemContainer className="animate__animated animate__fadeIn">
      <ProjectItemImage
        src={imageURL}
        alt={`project-item${projectId}`}
      />
      <ProjectItemDetailsContainer>
        <ProjectItemTitle>{title}</ProjectItemTitle>
        <ProjectItemDescription>{description}</ProjectItemDescription>
      </ProjectItemDetailsContainer>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
