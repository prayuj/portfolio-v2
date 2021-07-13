import './App.css';
import Navigation from './components/navbar'
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FixedNavRow = styled(Row)`
  position: sticky;
  top: 0;
  z-index: 1040;
`

function App() {
  return (
    <div className="App">
      <Container>
        <FixedNavRow>
          <Col>
            <Navigation />
            <Footer />
          </Col>
        </FixedNavRow>
        <Row id='overlay-content'>
          <Col></Col>
        </Row>
        <Row id='main-content'>
          <Col>
            <Home id="home" />
            <About id="about" />
            <Experience id="experience" />
            <Projects id="projects" />
            <Contact id="contact" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
