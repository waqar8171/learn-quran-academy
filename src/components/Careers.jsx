import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "./Footer";

const Careers = () => {
  return (
    <div className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold">Careers</h1>
          <p className="text-muted">
            Join our team and help spread the beautiful message of the Holy
            Quran around the world.
          </p>
        </div>

        <Row className="mb-5">
          <Col lg={6}>
            <h3>Why Join Learn Quran Academy?</h3>
            <p>
              We are committed to providing quality Quran education through
              experienced teachers and modern online learning methods. We
              welcome passionate individuals who want to make a positive impact.
            </p>

            <ul>
              <li>Flexible Online Teaching Hours</li>
              <li>Competitive Salary</li>
              <li>Supportive Working Environment</li>
              <li>Professional Growth Opportunities</li>
              <li>International Students</li>
            </ul>
          </Col>

          <Col lg={6}>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
              alt="Careers"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <h2 className="text-center mb-4">Current Openings</h2>

        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Online Quran Teacher</Card.Title>
                <Card.Text>
                  Teach Quran with Tajweed to students of all ages through
                  online classes.
                </Card.Text>
                <Button variant="success">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Arabic Language Teacher</Card.Title>
                <Card.Text>
                  Teach Arabic grammar, conversation, and Quranic Arabic to
                  international students.
                </Card.Text>
                <Button variant="success">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Student Support Executive</Card.Title>
                <Card.Text>
                  Assist students and parents with admissions, schedules, and
                  course-related queries.
                </Card.Text>
                <Button variant="success">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <h3>Didn't Find a Suitable Position?</h3>
          <p>
            Send your resume to
            <strong> careers@learnquranacademy.com</strong> and we'll contact
            you when a suitable opportunity becomes available.
          </p>

          <Button variant="dark" size="lg">
            Send Resume
          </Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Careers;
