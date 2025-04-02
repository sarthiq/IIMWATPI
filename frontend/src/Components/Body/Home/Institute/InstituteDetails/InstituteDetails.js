import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { collegeData } from '../instituteData';
import './InstituteDetails.css';

export const InstituteDetails = () => {
  const { id } = useParams();
  const college = collegeData.find((college) => college.routes === id);

  if (!college) {
    return <div className="inst-details-error">College not found</div>;
  }

  return (
    <Container className="inst-details-container py-5">
      <h2 className="inst-details-title text-center mb-4">{college.name}</h2>
      <p className="inst-details-location text-center mb-5">
        <i className="fas fa-map-marker-alt me-2"></i>
        {college.location.address}
      </p>

      <Row className="g-4">
        <Col xs={12} lg={8}>
          <Card className="inst-details-main-card shadow-sm">
            <Card.Body>
              {/* Rankings Section */}
              <div className="inst-details-section mb-4">
                <h4 className="inst-details-section-title">Rankings</h4>
                <Table striped bordered hover className="inst-details-table">
                  <tbody>
                    {college?.rankings?.nirf && (
                      <tr>
                        <td><strong>NIRF Ranking</strong></td>
                        <td>#{college.rankings.nirf}</td>
                      </tr>
                    )}
                    {college?.rankings?.qsWorld && (
                      <tr>
                        <td><strong>QS World Ranking</strong></td>
                        <td>#{college.rankings.qsWorld}</td>
                      </tr>
                    )}
                    {college?.rankings?.category && college?.rankings?.nirf && (
                      <tr>
                        <td><strong>Category Ranking</strong></td>
                        <td>#{college.rankings.nirf} in {college.rankings.category}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>

              {/* Courses Section */}
              <div className="inst-details-section mb-4">
                <h4 className="inst-details-section-title">Available Courses</h4>
                <div className="inst-details-courses">
                  {college.courses.map((course, index) => (
                    <div key={index} className="inst-course-item">
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility Section */}
              <div className="inst-details-section mb-4">
                <h4 className="inst-details-section-title">Eligibility Criteria</h4>
                {college?.eligibility && (
                  <Table striped bordered hover className="inst-details-table">
                    <tbody>
                      {college.eligibility.academicCriteria && (
                        <tr>
                          <td><strong>Academic Requirements</strong></td>
                          <td>{college.eligibility.academicCriteria}</td>
                        </tr>
                      )}
                      {college.eligibility.entranceRequirement && (
                        <tr>
                          <td><strong>Entrance Requirement</strong></td>
                          <td>{college.eligibility.entranceRequirement}</td>
                        </tr>
                      )}
                      {college.eligibility.ageLimit && (
                        <tr>
                          <td><strong>Age Limit</strong></td>
                          <td>{college.eligibility.ageLimit}</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                )}
              </div>

              {/* Infrastructure Section */}
              <div className="inst-details-section mb-4">
                <h4 className="inst-details-section-title">Campus & Infrastructure</h4>
                <div className="inst-details-text">
                  <p><strong>Campus:</strong> {college.infrastructure.campus}</p>
                  <h5 className="inst-details-subsection-title mt-3">Facilities</h5>
                  <ul className="inst-facilities-list">
                    {college.infrastructure.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <div className="inst-details-sidebar">
            {/* Entrance Exams Card */}
            <Card className="inst-details-exam-card shadow-sm mb-4">
              <Card.Body>
                <h4 className="inst-details-section-title">Entrance Exams</h4>
                {college.entranceExams.map((exam, index) => (
                  <div key={index} className="inst-exam-item">
                    <h5>{exam.name}</h5>
                    <p className="mb-1">{exam.description}</p>
                    <p className="mb-0">Required Percentile: {exam.minPercentile}%</p>
                  </div>
                ))}
              </Card.Body>
            </Card>

            {/* Placements Card */}
            <Card className="inst-details-placement-card shadow-sm mb-4">
              <Card.Body>
                <h4 className="inst-details-section-title">Placements</h4>
                <div className="inst-placement-stats">
                  {college.placement.averagePackage && (
                    <div className="inst-placement-stat">
                      <div className="inst-stat-value">{college.placement.averagePackage}</div>
                      <div className="inst-stat-label">Average Package</div>
                    </div>
                  )}
                  {college.placement.highestPackage && (
                    <div className="inst-placement-stat">
                      <div className="inst-stat-value">{college.placement.highestPackage}</div>
                      <div className="inst-stat-label">Highest Package</div>
                    </div>
                  )}
                </div>
                <h5 className="inst-details-subsection-title mt-4">Top Recruiters</h5>
                <ul className="inst-recruiters-list">
                  {college.placement.recruiters?.map((recruiter, index) => (
                    <li key={index}>{recruiter}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            {/* Fees Card */}
            <Card className="inst-details-fees-card shadow-sm">
              <Card.Body>
                <h4 className="inst-details-section-title">Fee Structure</h4>
                <Table striped bordered hover className="inst-details-table">
                  <tbody>
                    <tr>
                      <td><strong>Tuition Fee</strong></td>
                      <td>{college.fees.tuition}</td>
                    </tr>
                    <tr>
                      <td><strong>Hostel Fee</strong></td>
                      <td>{college.fees.hostel}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
