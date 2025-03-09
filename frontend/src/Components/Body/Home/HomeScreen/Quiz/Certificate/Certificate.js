import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Container, Button, Form, Card } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Certificate.css";
import { updateStudentDetailsHandler } from "../apiHandler";
import { useAlert } from "../../../../../UI/Alert/AlertContext";

const Certificate = ({ quizInfo, userData, setUserData, result }) => {
  console.log(result);
  const certificateRef = useRef();
  const quizType = quizInfo?.typeId || "";
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({
    name: userData.name || "",
    email: userData.email || "",
  });
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showAlert } = useAlert();

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      const certificate = certificateRef.current;
      const canvas = await html2canvas(certificate, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      // A4 size in mm
      const a4Width = 210; // A4 width in landscape
      const a4Height = 300; // A4 height in landscape

      // Create PDF in landscape orientation
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Add image maintaining aspect ratio
      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        0,
        0,
        a4Width,
        a4Height,
        undefined,
        "FAST"
      );

      const fileName = `${quizType}_certificate_${userData.name.replace(
        /\s+/g,
        "_"
      )}.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity()) {
      // Prepare data for API
      const submitData = {
        name: formData.name,
        email: formData.email,
        token: userData.token, // Assuming token is in result
      };

      const response = await updateStudentDetailsHandler(
        submitData,
        setIsSubmitting,
        showAlert
      );

      if (response && response.success) {
        setUserData({
          ...userData,
          name: formData.name,
          email: formData.email,
        });
      }
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getCertificateBackground = () => {
    switch (quizType) {
      case "normal":
        return "/CertificateIQ.png?quality=100";
      case "personality":
        return "/CertificatePersonality.png?quality=100";
      case "creativity":
        return "/CertificateCreativity.png?quality=100";
      default:
        return "";
    }
  };

  const getCertificateContent = () => {
    switch (quizType) {
      case "normal":
        return (
          <div className="certificate-content">
            <p style={{ color: "#000000", fontSize: "22px" }}>
              This is to certify that{" "}
              <strong style={{ color: "#000000" }}>{userData.name}</strong> has
              completed the IQ Assessment and has an IQ score{" "}
              <strong style={{ color: "#000000" }}>
                {result.iqLevel || "Average"}
              </strong>
            </p>
          </div>
        );

      case "personality":
        // Find the highest scoring personality trait
        const traits = {
          extraversion: result.extraversion,
          agreeableness: result.agreeableness,
          conscientiousness: result.conscientiousness,
          neuroticism: result.neuroticism,
          openness: result.openness,
        };

        const highestTrait = Object.entries(traits).reduce((a, b) =>
          a[1] > b[1] ? a : b
        )[0];

        // Convert trait name to proper format
        const getTraitName = (trait) => {
          const names = {
            extraversion: "Extraversion",
            agreeableness: "Agreeableness",
            conscientiousness: "Conscientiousness",
            neuroticism: "Neuroticism",
            openness: "Openness",
          };
          return names[trait];
        };

        return (
          <div className="certificate-content">
            <p>
              This is to certify that <strong>{userData.name}</strong> has
              completed the Big Five Personality Assessment and has Dominating
              Personality: <strong>{getTraitName(highestTrait)}</strong>
            </p>

            <div className="certificate-progress-bars">
              <div className="progress-item">
                <div className="progress-label">
                  <span>Extraversion</span>
                  <span>{result.extraversion.toFixed(0)}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill extraversion"
                    style={{ width: `${result.extraversion}%` }}
                  ></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-label">
                  <span>Agreeableness</span>
                  <span>{result.agreeableness.toFixed(0)}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill agreeableness"
                    style={{ width: `${result.agreeableness}%` }}
                  ></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-label">
                  <span>Conscientiousness</span>
                  <span>{result.conscientiousness.toFixed(0)}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill conscientiousness"
                    style={{ width: `${result.conscientiousness}%` }}
                  ></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-label">
                  <span>Neuroticism</span>
                  <span>{result.neuroticism.toFixed(0)}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill neuroticism"
                    style={{ width: `${result.neuroticism}%` }}
                  ></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-label">
                  <span>Openness</span>
                  <span>{result.openness.toFixed(0)}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill openness"
                    style={{ width: `${result.openness}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        );

      case "creativity":
        return (
          <div className="certificate-content">
            <p style={{ color: "#000000", fontSize: "22px" }}>
              This is to certify that{" "}
              <strong style={{ color: "#000000" }}>{userData.name}</strong> has
              completed the Creativity Assessment and has achieved a Creativity
              Level of{" "}
              <strong style={{ color: "#000000" }}>{result.label}</strong>
            </p>
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                type="submit"
                variant="primary"
                className="w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Updating...
                  </>
                ) : (
                  "Proceed to Certificate"
                )}
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
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </>
        ) : (
          "Download Certificate"
        )}
      </Button>
    </Container>
  );
};

export default Certificate;
