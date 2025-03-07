import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import "./Profile.css";

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "John Doe", // Replace with actual user data
    email: "john@example.com",
    phone: "+91 9876543210",
    institutionName: "",
    institutionType: "",
    otherInstitution: "",
    standard: "",
    course: "",
    year: "",
    branch: "",
  });

  const institutionTypes = ["School", "College", "University", "Other"];

  const standardOptions = {
    School: Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
    College: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    University: ["Bachelors", "Masters", "PhD"],
    Other: [],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "institutionType") {
      setShowOtherField(value === "Other");
      // Reset standard when institution type changes
      setUserInfo((prev) => ({
        ...prev,
        standard: "",
        otherInstitution: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Updated Info:", userInfo);
    setIsEditing(false);
  };

  // ... previous imports and initial code remains same until return statement ...

  return (
    <Container className="profile-container">
      <Card className="profile-card">
        <Card.Body>
          <div className="profile-header">
            <h2>Profile Information</h2>
            {!isEditing && (
              <Button
                variant="primary"
                onClick={() => setIsEditing(true)}
                className="edit-button"
              >
                Edit Profile
              </Button>
            )}
          </div>

          <Form onSubmit={handleSubmit}>
            {/* Basic Information Section */}
            <section className="info-section">
              <h4>Basic Information</h4>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={userInfo.name}
                      disabled={!isEditing}
                      onChange={handleChange}
                      name="name"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={userInfo.email}
                      disabled={!isEditing}
                      onChange={handleChange}
                      name="email"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      value={userInfo.phone}
                      disabled={!isEditing}
                      onChange={handleChange}
                      name="phone"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </section>

            {/* Educational Information Section */}
            <section className="info-section">
              <h4>Educational Information</h4>
              <Row>
                <Col md={6}>
                  {isEditing ? (
                    <Form.Group className="mb-3">
                      <Form.Label>Institution Type</Form.Label>
                      <Form.Select
                        name="institutionType"
                        value={userInfo.institutionType}
                        onChange={handleChange}
                      >
                        <option value="">Select Institution Type</option>
                        {institutionTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  ) : (
                    <Form.Group className="mb-3">
                      <Form.Label>Institution Type</Form.Label>
                      <Form.Control
                        plaintext
                        readOnly
                        value={userInfo.institutionType || "Not specified"}
                      />
                    </Form.Group>
                  )}
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Institution Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="institutionName"
                      value={userInfo.institutionName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      placeholder={
                        isEditing ? "Enter institution name" : "Not specified"
                      }
                    />
                  </Form.Group>
                </Col>

                {showOtherField && isEditing && (
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Specify Institution Type</Form.Label>
                      <Form.Control
                        type="text"
                        name="otherInstitution"
                        value={userInfo.otherInstitution}
                        onChange={handleChange}
                        placeholder="Please specify your institution type"
                      />
                    </Form.Group>
                  </Col>
                )}

                <Col md={6}>
                  {isEditing && userInfo.institutionType && !showOtherField ? (
                    <Form.Group className="mb-3">
                      <Form.Label>Standard/Year</Form.Label>
                      <Form.Select
                        name="standard"
                        value={userInfo.standard}
                        onChange={handleChange}
                      >
                        <option value="">Select Standard/Year</option>
                        {standardOptions[userInfo.institutionType].map(
                          (std) => (
                            <option key={std} value={std}>
                              {std}
                            </option>
                          )
                        )}
                      </Form.Select>
                    </Form.Group>
                  ) : (
                    <Form.Group className="mb-3">
                      <Form.Label>Standard/Year</Form.Label>
                      <Form.Control
                        plaintext
                        readOnly
                        value={userInfo.standard || "Not specified"}
                      />
                    </Form.Group>
                  )}
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Course</Form.Label>
                    <Form.Control
                      type="text"
                      name="course"
                      value={userInfo.course}
                      onChange={handleChange}
                      disabled={!isEditing}
                      placeholder={isEditing ? "Enter course" : "Not specified"}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control
                      type="text"
                      name="branch"
                      value={userInfo.branch}
                      onChange={handleChange}
                      disabled={!isEditing}
                      placeholder={isEditing ? "Enter branch" : "Not specified"}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </section>

            {isEditing && (
              <div className="button-group">
                <Button
                  variant="secondary"
                  onClick={() => setIsEditing(false)}
                  className="me-2"
                >
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </div>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
