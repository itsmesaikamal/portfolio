import {Component} from 'react';
import styled from 'styled-components';

import TabItem from './TabItem';
import ProjectItem from './ProjectItem';

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
];

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 3,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
    title: 'Happy Meals',
    description: 'Discover the best foods in over 1,000 restaurants.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },
  {
    projectId: 7,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
    title: 'Design',
    description:
      'A website to showcase the best features and give more information about the Design tool.',
  },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
];

const AppContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffcc00;
  text-align: center;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const TabsContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const ProjectListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

class Project extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  };

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue});
  };

  getFilteredProjects = () => {
    const {activeTabId} = this.state;
    const filteredProjects = projectsList.filter(
      eachprojectDetails => eachprojectDetails.category === activeTabId,
    );
    return filteredProjects;
  };

  render() {
    const {activeTabId} = this.state;
    const filteredProjects = this.getFilteredProjects();
    return (
      <AppContainer id="project">
        <Title>Projects</Title>
        <Description>
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </Description>

        <TabsContainer>
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </TabsContainer>

        <ProjectListContainer>
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ProjectListContainer>
      </AppContainer>
    );
  }
}

export default Project;
