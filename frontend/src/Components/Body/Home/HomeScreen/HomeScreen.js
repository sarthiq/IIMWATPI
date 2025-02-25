import React from "react";
import "./HomeScreen.css"; // Unique CSS for this page
import { Banner } from "./Banner/banner";
import { TestSection } from "./TestSection/TestSection";
import { VideoSection } from "./VideoSection/VideoSection";
import { CareerSection } from "./CareerSection/CareerSection";
import { CareerResearch } from "./CareerResearch/CareerResearch";


export const HomeScreen = () => {
  return (
    <div className="quiz-selection-page">
      <Banner/>
      <TestSection/>
      <VideoSection/>
      <CareerSection/>
      <CareerResearch/>
      {/* Quiz Cards
      <Container className="quiz-container">
        <Row>
          {quizzes.map((quiz) => (
            <Link to={`./quiz/${quiz.id}`}>
              <Col key={quiz.id} md={6} lg={4} className="quiz-col">
                <Card className="quiz-card">
                  <Card.Img
                    variant="top"
                    src={quiz.image}
                    className="quiz-image"
                  />
                  <Card.Body>
                    <Card.Title className="quiz-title">{quiz.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </Container> */}
    </div>
  );
};
