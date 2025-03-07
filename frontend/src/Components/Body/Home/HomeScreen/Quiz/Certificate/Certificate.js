import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Container, Button } from "react-bootstrap";
import "./Certificate.css";

const Certificate = ({ quizInfo }) => {
  const certificateRef = useRef();
  const quizType = quizInfo?.typeId || "";

  const handlePrint = useReactToPrint({
    content: () => certificateRef.current,
  });

  const getCertificateBackground = () => {
    switch(quizType) {
      case "IQ":
        return "/CertificateIQ.png";
      case "personality":
        return "/CertificatePersonality.png";
      case "creativity":
        return "/CertificateCreativity.png";
      default:
        return "";
    }
  };

  const getCertificateContent = () => {
    switch(quizType) {
      case "IQ":
        return (
          <div className="certificate-content">
            <p>
              This is to certify that <strong>John Doe</strong> has completed 
              the IQ Assessment with a score of <strong>{quizInfo.iqLevel || "Average"}</strong>
            </p>
          </div>
        );

      case "personality":
        return (
          <div className="certificate-content">
            <div className="scores-section">
              <p>This is to certify that <strong>John Doe</strong> has completed 
              the Big Five Personality Assessment with the following scores:</p>
              <p>Extraversion: {quizInfo.extraversion}%</p>
              <p>Agreeableness: {quizInfo.agreeableness}%</p>
              <p>Conscientiousness: {quizInfo.conscientiousness}%</p>
              <p>Neuroticism: {quizInfo.neuroticism}%</p>
              <p>Openness: {quizInfo.openness}%</p>
            </div>
          </div>
        );

      case "creativity":
        return (
          <div className="certificate-content">
            <div className="scores-section">
              <p>This is to certify that <strong>John Doe</strong> has completed 
              the Creativity Assessment with the following scores:</p>
              <p>Overall Level: {quizInfo.label}</p>
              <p>Fluency: {quizInfo.categoryScores?.fluency}</p>
              <p>Flexibility: {quizInfo.categoryScores?.flexibility}</p>
              <p>Originality: {quizInfo.categoryScores?.originality}</p>
              <p>Elaboration: {quizInfo.categoryScores?.elaboration}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!quizType) {
    return (
      <Container className="certificate-container">
        <div>No certificate type specified</div>
      </Container>
    );
  }

  return (
    <Container className="certificate-container">
      <Button 
        variant="primary" 
        onClick={handlePrint}
        className="download-button"
      >
        Download Certificate
      </Button>

      <div 
        ref={certificateRef} 
        className="certificate"
        data-type={quizType}
        style={{
          backgroundImage: `url(${getCertificateBackground()})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {getCertificateContent()}
      </div>
    </Container>
  );
};

export default Certificate;
