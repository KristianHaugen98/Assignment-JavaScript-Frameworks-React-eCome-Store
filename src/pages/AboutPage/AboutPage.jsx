import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AboutPage = () => {
  // Only me for now:
  const teamMembers = [
    {
      name: "Kristian Haugen",
      role: "CEO & Founder",
      image: "/images/me.jpg",
    },
  ];

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <section className="text-center mb-5 p-5 bg-light rounded-3">
        <h1 className="display-4 fw-bold">
          About Our Company <strong>FlowBuy</strong>
        </h1>
        <p className="lead text-muted">
          Innovating the future of online shopping
        </p>
        <Button as="a" href="contact" variant="primary" size="lg">
          Contact us
        </Button>
      </section>

      {/* Our Mission Section */}
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center py-4">Our Mission</h2>
          <p>
            We’re passionate about creating a smooth, modern shopping experience
            — built from the ground up with React. Our goal is simple: offer a
            wide selection, great prices, fast performance, and an accessible,
            enjoyable store for everyone. Whether you're hunting for deals or
            just browsing, we're here to make your shopping effortless and fun.
          </p>
        </Col>
      </Row>

      {/* Team Section (only me for now) */}
      <h2 className="text-center mb-4 py-4">Meet the Team</h2>
      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 text-center border-0 shadow-sm d-flex flex-column">
              <Card.Img
                variant="top"
                src={member.image}
                className="rounded-circle mx-auto mt-4"
                style={{
                  width: "220px",
                  height: "220px",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />

              <Card.Body className="d-flex flex-column flex-grow-1 justify-content-center">
                <Card.Title className="mb-3">{member.name}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  {member.role}
                </Card.Subtitle>
                <Card.Text>
                  Entrepreneur. <br />
                  Building scalable solutions with modern web technologies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutPage;
