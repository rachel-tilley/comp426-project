import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Hero, Heading, Navbar, Button, Columns } from 'react-bulma-components';

function Landing() {
  return (
    <div className="Landing">
      <Navbar>
      <Navbar.Brand>
          <Navbar.Item renderAs="a" href="">
            <img src="https://pixy.org/src/70/707393.gif" alt="UNC Logo" width="152" height="152" />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Container>
        <Navbar.Item href="#">
            <Heading>Postings</Heading>
          </Navbar.Item>
          <Navbar.Item href="#">
            <Heading>Calendar</Heading>
          </Navbar.Item>
          <Navbar.Item href="#">
            <Heading>Location Recommendations</Heading>
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item>
            <Button.Group>
              <Button color="primary">
                Sign up
              </Button>
              <Button color="primary">
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

      <Container className="has-text-centered">
        <Heading size={1}>How it works:</Heading>
      </Container>
      <br />

      <Columns>
        <Columns.Column className="has-text-centered">
          <Heading size={3} className="has-text-white has-background-info">
            Make an account
            <img src="https://www.flaticon.com/svg/static/icons/svg/25/25308.svg" alt="Keyboard icon" />
          </Heading>
        </Columns.Column>
        <Columns.Column className="has-text-centered">
          <Heading size={3} className="has-text-white has-background-info">
            Submit a posting
            <img src ="https://www.flaticon.com/svg/static/icons/svg/3597/3597089.svg" />
          </Heading>
        </Columns.Column>
        <Columns.Column className="has-text-centered">
          <Heading size={3} className="has-text-white has-background-info">
            Find a buddy!
            <img src="https://www.flaticon.com/svg/static/icons/svg/2583/2583138.svg" />
          </Heading>
        </Columns.Column>
      </Columns>

    </div>
  );
}

export default Landing;
