import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { useAlert } from "../../../../../UI/Alert/AlertContext";
import { getProfileHandler, updateProfileHandler } from "../apiHandler";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { useDispatch } from "react-redux";
import { userLogOut, setUserAuthToken } from "../../../../../../Store/User/auth";

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    institutionName: "",
    institutionType: "",
    otherInstitution: "",
    standard: "",
    course: "",
    year: "",
    branch: "",
    profilePhoto: null,
  });

  const institutionTypes = ["School", "College", "University", "Other"];

  const standardOptions = {
    School: Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
    College: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    University: ["Bachelors", "Masters", "PhD"],
    Other: [],
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    const response = await getProfileHandler(setIsLoading, showAlert);
    if (response && response.success) {
      const userData = {
        ...response.data,
        ...response.data.User,
        name: response.data.User?.name || "",
        email: response.data.User?.email || "",
        phone: response.data.User?.phone || "",
        institutionName: response.data?.institutionName || "",
        institutionType: institutionTypes.includes(
          response.data?.institutionType
        )
          ? response.data?.institutionType
          : "Other",
        otherInstitution: response.data?.otherInstitution || "",
        standard: response.data?.standard || "",
        course: response.data?.course || "",
        year: response.data?.year || "",
        branch: response.data?.branch || "",
        profilePhoto: response.data?.profilePhoto || null,
      };
      setUserInfo(userData);
      setShowOtherField(userData.institutionType === "Other");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "institutionType") {
      setShowOtherField(value === "Other");
      setUserInfo((prev) => ({
        ...prev,
        standard: "",
        otherInstitution: "",
      }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserInfo((prev) => ({
        ...prev,
        profilePhoto: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateProfileHandler(
      userInfo,
      setIsLoading,
      showAlert
    );
    if (response && response.success) {
      showAlert("Profile updated successfully!", "success");
      setIsEditing(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(userLogOut());
    dispatch(setUserAuthToken(null));
    showAlert("Logged out successfully!", "success");
    navigate("/auth");
  };

  if (isLoading) {
    return (
      <div className="profile-loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container className="profile-container">
      <Card className="profile-card">
        <div className="profile-layout">
          <div className="profile-header">
            <div className="profile-title">Profile Information</div>
            <div className="profile-actions">
              {!isEditing && (
                <button
                  className="profile-edit-button"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
              <button
                className="profile-logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="profile-body">
            <div className="profile-summary">
              <div className="profile-photo-container">
                {userInfo.profilePhoto ? (
                  <img src={userInfo.profilePhoto} alt="Profile" className="profile-photo" />
                ) : (
                  <div className="profile-initial">{userInfo.name.charAt(0)}</div>
                )}
              </div>
              <div className="profile-summary-details">
                <div className="profile-name">{userInfo.name}</div>
                <p className="profile-info"><strong>School:</strong> {userInfo.institutionName || "Not specified"}</p>
                <p className="profile-info"><strong>Class:</strong> {userInfo.standard || "Not specified"}</p>
              </div>
            </div>
            
            <div className="profile-details">
              <Form onSubmit={handleSubmit}>
                {isEditing && (
                  <div className="info-section">
                    <div className="section-title">Profile Photo</div>
                    <Form.Group className="form-group">
                      <Form.Label>Upload New Photo</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </div>
                )}
                
                {/* Basic Information Section */}
                <section className="info-section">
                  <div className="section-title">Basic Information</div>
                  <Row>
                    <Col md={4}>
                      <Form.Group className="form-group">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={userInfo.name}
                          disabled={!isEditing}
                          onChange={handleChange}
                          name="name"
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="form-group">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={userInfo.email}
                          disabled={!isEditing}
                          onChange={handleChange}
                          name="email"
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="form-group">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          value={userInfo.phone}
                          disabled={!isEditing}
                          onChange={handleChange}
                          name="phone"
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </section>

                {/* Educational Information Section */}
                <section className="info-section">
                  <div className="section-title">Educational Information</div>
                  <Row>
                    <Col md={6}>
                      {isEditing ? (
                        <Form.Group className="form-group">
                          <Form.Label>Institution Type</Form.Label>
                          <Form.Select
                            name="institutionType"
                            value={userInfo.institutionType}
                            onChange={handleChange}
                            className="form-select-custom"
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
                        <Form.Group className="form-group">
                          <Form.Label>Institution Type</Form.Label>
                          <Form.Control
                            plaintext
                            readOnly
                            value={userInfo.institutionType || "Not specified"}
                            className="form-control-custom"
                          />
                        </Form.Group>
                      )}
                    </Col>

                    <Col md={6}>
                      <Form.Group className="form-group">
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
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>

                    {showOtherField && isEditing && (
                      <Col md={12}>
                        <Form.Group className="form-group">
                          <Form.Label>Specify Institution Type</Form.Label>
                          <Form.Control
                            type="text"
                            name="otherInstitution"
                            value={userInfo.otherInstitution}
                            onChange={handleChange}
                            placeholder="Please specify your institution type"
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                    )}

                    <Col md={6}>
                      {isEditing && userInfo.institutionType && !showOtherField ? (
                        <Form.Group className="form-group">
                          <Form.Label>Standard/Year</Form.Label>
                          <Form.Select
                            name="standard"
                            value={userInfo.standard}
                            onChange={handleChange}
                            className="form-select-custom"
                          >
                            <option value="">Select Standard/Year</option>
                            {standardOptions[
                              userInfo.institutionType || "Other"
                            ].map((std) => (
                              <option key={std} value={std}>
                                {std}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      ) : (
                        <Form.Group className="form-group">
                          <Form.Label>Standard/Year</Form.Label>
                          <Form.Control
                            plaintext
                            readOnly
                            value={userInfo.standard || "Not specified"}
                            className="form-control-custom"
                          />
                        </Form.Group>
                      )}
                    </Col>

                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Course</Form.Label>
                        <Form.Control
                          type="text"
                          name="course"
                          value={userInfo.course}
                          onChange={handleChange}
                          disabled={!isEditing}
                          placeholder={isEditing ? "Enter course" : "Not specified"}
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Branch</Form.Label>
                        <Form.Control
                          type="text"
                          name="branch"
                          value={userInfo.branch}
                          onChange={handleChange}
                          disabled={!isEditing}
                          placeholder={isEditing ? "Enter branch" : "Not specified"}
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </section>

                {isEditing && (
                  <div className="button-group">
                    <button
                      className="cancel-button"
                      onClick={() => setIsEditing(false)}
                      type="button"
                    >
                      Cancel
                    </button>
                    <button className="save-button" type="submit">
                      Save Changes
                    </button>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};
