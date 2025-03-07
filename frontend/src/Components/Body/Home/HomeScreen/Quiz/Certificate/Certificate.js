import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useLocation } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./Certificate.css";

const Certificate = () => {
  const certificateRef = useRef();
  const location = useLocation();
  const result = location.state?.result || {};
  const quizType = location.state?.quizType || "";

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
            <h2>IQ Certificate</h2>
            <p className="mt-4">
              This is to certify that <strong>{result.name || "User"}</strong> has completed 
              the IQ Assessment with a score of <strong>{result.iqLevel || "Average"}</strong>
            </p>
          </div>
        );

      case "personality":
        return (
          <div className="certificate-content">
            <h2>Personality Certificate</h2>
            <p className="mt-4">
              This is to certify that <strong>{result.name || "User"}</strong> has completed 
              the Big Five Personality Assessment with the following scores:
            </p>
            <div className="scores-section">
              <p>Extraversion: {result.extraversion}%</p>
              <p>Agreeableness: {result.agreeableness}%</p>
              <p>Conscientiousness: {result.conscientiousness}%</p>
              <p>Neuroticism: {result.neuroticism}%</p>
              <p>Openness: {result.openness}%</p>
            </div>
          </div>
        );

      case "creativity":
        return (
          <div className="certificate-content">
            <h2>Creativity Certificate</h2>
            <p className="mt-4">
              This is to certify that <strong>{result.name || "User"}</strong> has completed 
              the Creativity Assessment with the following scores:
            </p>
            <div className="scores-section">
              <p>Overall Level: {result.label}</p>
              <p>Fluency: {result.categoryScores?.fluency}</p>
              <p>Flexibility: {result.categoryScores?.flexibility}</p>
              <p>Originality: {result.categoryScores?.originality}</p>
              <p>Elaboration: {result.categoryScores?.elaboration}</p>
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
        style={{
          backgroundImage: `url(${getCertificateBackground()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '800px',
          height: '600px',
          position: 'relative',
          padding: '40px'
        }}
      >
        <div className="certificate-inner">
          <img 
            src="/images/logo.png" 
            alt="SarthiQ Logo" 
            className="certificate-logo" 
          />
          {getCertificateContent()}
          <div className="certificate-footer">
            <div className="signature-line"></div>
            <p>Issued by SarthiQ</p>
          </div>
          <img 
            src="/images/medal.png" 
            alt="Medal" 
            className="certificate-medal" 
          />
        </div>
      </div>
    </Container>
  );
};

export default Certificate;
