import React, { useRef, useState } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./Certificate.css";

const Certificate = ({ quizInfo, userData, setUserData }) => {
  const certificateRef = useRef();
  const quizType = quizInfo?.typeId || "";
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name || "",
    email: userData.email || ""
  });
  const [validated, setValidated] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      const certificate = certificateRef.current;
      const canvas = await html2canvas(certificate, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Enable CORS for images
        allowTaint: true,
        backgroundColor: null
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF('l', 'mm', 'a4'); // 'l' for landscape orientation
      const imgData = canvas.toDataURL('image/png');
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Generate filename based on quiz type and user name
      const fileName = `${quizType}_certificate_${userData.name.replace(/\s+/g, '_')}.pdf`;
      
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // You might want to show an alert here using your alert system
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity()) {
      setUserData({
        ...userData,
        name: formData.name,
        email: formData.email
      });
    }
    
    setValidated(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getCertificateBackground = () => {
    switch(quizType) {
      case "normal":
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
      case "normal":
        return (
          <div className="certificate-content">
            <div className="certificate-header">
              <h2>Certificate of Completion</h2>
              <h3>IQ Assessment</h3>
            </div>
            <div className="certificate-body">
              <p>
                This is to certify that <strong>{userData.name}</strong> has completed 
                the IQ Assessment with a score of <strong>{quizInfo.iqLevel || "Average"}</strong>
              </p>
              <p className="certificate-date">
                Date: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        );

      case "personality":
        return (
          <div className="certificate-content">
            <div className="certificate-header">
              <h2>Certificate of Completion</h2>
              <h3>Personality Assessment</h3>
            </div>
            <div className="certificate-body">
              <p>This is to certify that <strong>{userData.name}</strong> has completed 
              the Big Five Personality Assessment with the following scores:</p>
              <div className="scores-grid">
                <p>Extraversion: <strong>{quizInfo.extraversion}%</strong></p>
                <p>Agreeableness: <strong>{quizInfo.agreeableness}%</strong></p>
                <p>Conscientiousness: <strong>{quizInfo.conscientiousness}%</strong></p>
                <p>Neuroticism: <strong>{quizInfo.neuroticism}%</strong></p>
                <p>Openness: <strong>{quizInfo.openness}%</strong></p>
              </div>
              <p className="certificate-date">
                Date: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        );

      case "creativity":
        return (
          <div className="certificate-content">
            <div className="certificate-header">
              <h2>Certificate of Completion</h2>
              <h3>Creativity Assessment</h3>
            </div>
            <div className="certificate-body">
              <p>This is to certify that <strong>{userData.name}</strong> has completed 
              the Creativity Assessment with the following scores:</p>
              <div className="scores-grid">
                <p>Overall Level: <strong>{quizInfo.label}</strong></p>
                <p>Fluency: <strong>{quizInfo.categoryScores?.fluency}</strong></p>
                <p>Flexibility: <strong>{quizInfo.categoryScores?.flexibility}</strong></p>
                <p>Originality: <strong>{quizInfo.categoryScores?.originality}</strong></p>
                <p>Elaboration: <strong>{quizInfo.categoryScores?.elaboration}</strong></p>
              </div>
              <p className="certificate-date">
                Date: {new Date().toLocaleDateString()}
              </p>
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

  if (!userData.name || !userData.email) {
    return (
      <Container className="user-data-form-container">
        <Card className="user-data-form-card">
          <Card.Header as="h4">Enter Your Details</Card.Header>
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Proceed to Certificate
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="certificate-container">
      <Button 
        variant="primary" 
        onClick={handleDownload}
        className="download-button"
        disabled={isDownloading}
      >
        {isDownloading ? 'Generating PDF...' : 'Download Certificate'}
      </Button>

      <div 
        ref={certificateRef} 
        className="certificate"
        data-type={quizType}
        style={{
          backgroundImage: `url(${getCertificateBackground()})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '800px', // Fixed width for better PDF generation
          height: '566px', // Aspect ratio for A4 landscape
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {getCertificateContent()}
      </div>
    </Container>
  );
};

export default Certificate;
