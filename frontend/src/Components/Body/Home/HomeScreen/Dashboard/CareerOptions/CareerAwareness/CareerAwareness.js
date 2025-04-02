import React from "react";
import { Container, Badge, Table } from "react-bootstrap";
import { careerData } from "./careerData";
import styles from "./CareerAwareness.module.css";

export const CareerAwareness = () => {
  const getDemandBadgeVariant = (demand) => {
    return demand === "Very High"
      ? "danger"
      : demand === "High"
      ? "warning"
      : "info";
  };

  return (
    <Container className={styles["career-summary-container"]}>
      
      <div className={styles["table-responsive"]}>
        <Table striped bordered hover className={styles["career-table"]}>
          <thead>
            <tr>
              <th>Field</th>
              <th>Potential Careers</th>
              <th>Education Required</th>
              <th>Expected Salary</th>
              <th>Demand</th>
            </tr>
          </thead>
          <tbody>
            {careerData.map((field, index) => (
              <tr key={index}>
                <td className={styles["field-column"]}>{field.field}</td>
                <td>
                  <ol className={styles["careers-list"]}>
                    {field.careers.map((career, idx) => (
                      <li key={idx}>{career}</li>
                    ))}
                  </ol>
                </td>
                <td>
                  <div className={styles["education-details"]}>
                    <p>
                      <strong>Stream:</strong> {field.education.stream}
                    </p>
                    <p>
                      <strong>Graduation:</strong> {field.education.graduation}
                    </p>
                    <p>
                      <strong>Additional:</strong> {field.education.additional}
                    </p>
                  </div>
                </td>
                <td className={styles["salary-column"]}>
                  <span className={styles["salary-range"]}>{field.salary}</span>
                </td>
                <td className={styles["demand-column"]}>
                  <Badge bg={getDemandBadgeVariant(field.demand)}>
                    {field.demand}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
