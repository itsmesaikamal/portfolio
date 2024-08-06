import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaDatabase, FaPython, FaJava, FaGitAlt, FaGithub, FaDocker, FaLinux } from 'react-icons/fa';
import 'animate.css';

const SkillsContainer = styled(Container)`
  padding: 5rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
`;

const SkillCard = styled(Card)`
  margin: 1.5rem 0;
  background-color: #2c3e50;
  color: #ecf0f1;
  border: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled(Card.Title)`
  color: #ffcc00;
  font-size: 2rem;
  margin-bottom: 1rem;
  animation: fadeInDown 2s;
`;

const CardText = styled(Card.Text)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #bdc3c7;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Icon = styled.span`
  font-size: 2.5rem;
  margin-right: 0.5rem;
  color: #ffcc00;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }
`;

const Heading = styled.h2`
  font-size: 3rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 2rem;
  animation: fadeInDown 2s;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Heading className="animate__animated animate__fadeInDown">My Skills</Heading>
      <Row>
        <Col md={6} className="animate__animated animate__fadeInUp">
          <SkillCard>
            <Card.Body>
              <CardTitle>Frontend</CardTitle>
              <CardText>
                <Icon><FaHtml5 /></Icon> HTML
                <br />
                <Icon><FaCss3Alt /></Icon> CSS
                <br />
                <Icon><FaReact /></Icon> React
                <br />
                <Icon><FaJsSquare /></Icon> JavaScript
              </CardText>
            </Card.Body>
          </SkillCard>
        </Col>
        <Col md={6} className="animate__animated animate__fadeInUp">
          <SkillCard>
            <Card.Body>
              <CardTitle>Backend</CardTitle>
              <CardText>
                <Icon><FaNodeJs /></Icon> Node.js
                <br />
                <Icon><FaDatabase /></Icon> Databases
                <br />
                <Icon><FaPython /></Icon> Python
                <br />
                <Icon><FaJava /></Icon> Java
              </CardText>
            </Card.Body>
          </SkillCard>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="animate__animated animate__fadeInUp">
          <SkillCard>
            <Card.Body>
              <CardTitle>Version Control</CardTitle>
              <CardText>
                <Icon><FaGitAlt /></Icon> Git
                <br />
                <Icon><FaGithub /></Icon> GitHub
                <br />
                <Icon><FaDocker /></Icon> Docker
                <br />
                <Icon><FaLinux /></Icon> Linux
              </CardText>
            </Card.Body>
          </SkillCard>
        </Col>
        <Col md={6} className="animate__animated animate__fadeInUp">
          <SkillCard>
            <Card.Body>
              <CardTitle>Programming Languages</CardTitle>
              <CardText>
                <Icon><FaPython /></Icon> Python
                <br />
                <Icon><FaJava /></Icon> Java
                <br />
                <Icon><FaJsSquare /></Icon> JavaScript
                <br />
                <Icon><FaHtml5 /></Icon> HTML
              </CardText>
            </Card.Body>
          </SkillCard>
        </Col>
      </Row>
    </SkillsContainer>
  );
};

export default Skills;
