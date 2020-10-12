import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Hero, Heading, Navbar, Button } from 'react-bulma-components';

function Landing() {
  return (
    <div className="Landing">
      <Navbar>
        <Navbar.Container>
        <Navbar.Item href="#">
            Postings
          </Navbar.Item>
          <Navbar.Item href="#">
            Calendar
          </Navbar.Item>
          <Navbar.Item href="#">
            Location Recommendations
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item>
            <Button.Group>
              <Button color="is-primary">
                Sign up
              </Button>
              <Button color="is-primary">
                Log in
              </Button>

            </Button.Group>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar>

      <Section>
        <Hero color="info" >
          <Hero.Body>
            <Container>
              <Heading>
              Find a Study Buddy!
              </Heading>
              <Heading subtitle size={3}>
              The #1 place for UNC students to connect
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
    </div>
  );
}

export default Landing;
