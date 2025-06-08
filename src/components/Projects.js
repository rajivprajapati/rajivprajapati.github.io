import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
export const Projects = () => {
  const projects = [
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Startup',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              I’ve worked on a range of data engineering projects focused on
              building data pipelines, automating ETL processes, and managing
              large datasets. These projects demonstrate my ability to design
              scalable systems, work with cloud services, and turn raw data into
              valuable insights for decision-making.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bgn right"
      />
    </section>
  );
};
