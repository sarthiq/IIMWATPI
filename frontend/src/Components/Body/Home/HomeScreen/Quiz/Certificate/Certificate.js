import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Container, Button, Form, Card } from "react-bootstrap";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./Certificate.css";

const Certificate = ({ quizInfo, userData, setUserData, result }) => {
  console.log(result);
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
        scale: 2, // Better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: null
      });

      // A4 size in mm
      const a4Width = 297;  // A4 width in landscape
      const a4Height = 210; // A4 height in landscape

      // Create PDF in landscape orientation
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      // Calculate image dimensions to fit A4 while maintaining aspect ratio
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, a4Width, a4Height);
      
      const fileName = `${quizType}_certificate_${userData.name.replace(/\s+/g, '_')}.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
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
            <p>
              This is to certify that <strong>{userData.name}</strong> has completed 
              the IQ Assessment with a score of <strong>{result.iqLevel || "Average"}</strong>
            </p>
          </div>
        );

        
      case "personality":
        return (
          <div className="certificate-content">
            <div className="scores-section">
              <p>This is to certify that <strong>{userData.name}</strong> has completed 
              the Big Five Personality Assessment with the following scores:</p>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Extraversion:</span>
                <span>{result.extraversion.toFixed(2)}%</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Agreeableness:</span>
                <span>{result.agreeableness.toFixed(2)}%</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Conscientiousness:</span>
                <span>{result.conscientiousness.toFixed(2)}%</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Neuroticism:</span>
                <span>{result.neuroticism.toFixed(2)}%</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Openness:</span>
                <span>{result.openness.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        );

      case "creativity":
        return (
          <div className="certificate-content">
            <div className="scores-section">
              <p>This is to certify that <strong>{userData.name}</strong> has completed 
                the Creativity Assessment with the following scores:</p>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Overall Level:</span>
                <span>{result.total.toFixed(2)}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Fluency:</span>
                <span>{result.categoryScores?.fluency.toFixed(2)}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Flexibility:</span>
                <span>{result.categoryScores?.flexibility.toFixed(2)}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Originality:</span>
                <span>{result.categoryScores?.originality.toFixed(2)}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Elaboration:</span>
                <span>{result.categoryScores?.elaboration.toFixed(2)}</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!quizType || !result) {
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
    <Container fluid className="certificate-container p-0">
      <div 
        ref={certificateRef} 
        className="certificate"
        data-type={quizType}
        style={{
          backgroundImage: `url(${getCertificateBackground()})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {getCertificateContent()}
      </div>

      <Button 
        variant="primary" 
        onClick={handleDownload}
        className="download-button mt-3"
      >
        {isDownloading ? (
          <>
            <span className="me-2">Generating PDF...</span>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </>
        ) : 'Download Certificate'}
      </Button>
    </Container>
  );
};

export default Certificate;

