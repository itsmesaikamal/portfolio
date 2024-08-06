import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import 'animate.css';
import Typewriter from 'react-typewriter-effect';

const HomeContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: left;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 0 2rem;
`;

const Heading = styled.h1`
  color: #ffcc00;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeInDown 2s;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
  color: #333;
  animation: fadeInLeft 2s;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeInRight 2s;
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <Row>
        <Col md={6}>
          <Heading className="animate__animated animate__fadeInDown">
            <Typewriter
              textStyle={{
                fontFamily: 'Poppins',
                color: '#ffcc00',
                fontWeight: 'bold',
                fontSize: '3rem',
              }}
              startDelay={100}
              cursorColor="#ffcc00"
              multiText={['I am Sai Kamal Welcome to My Portfolio']}
              multiTextDelay={1000}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </Heading>
          <Paragraph className="animate__animated animate__fadeInLeft">
            I am a passionate and dedicated web developer with a keen eye for detail and a love for creating dynamic,
            user-friendly websites. With a strong foundation in HTML, CSS, JavaScript, and experience with frameworks like React and Node.js,
            I bring ideas to life on the web. My expertise extends to both front-end and back-end development, ensuring seamless and
            efficient web solutions. I am committed to continuous learning and staying updated with the latest industry trends.
            Collaboration and problem-solving are my strengths, driving me to deliver high-quality projects. Let's create something amazing together!
          </Paragraph>
        </Col>
        <Col md={6}>
          <Image
            src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-in-the-style-of-2d-game-art-image_2884743.jpg"
            alt="Portfolio"
            className="animate__animated animate__fadeInRight"
          />
        </Col>
      </Row>
    </HomeContainer>
  );
};

export default Home;
