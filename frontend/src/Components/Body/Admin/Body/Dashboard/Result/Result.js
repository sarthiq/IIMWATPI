import React, { useState, useEffect } from "react";
import { Container, Table, Form, Spinner, Pagination, Button } from "react-bootstrap";
import { useAlert } from "../../../../../UI/Alert/AlertContext";
import { getResultsHandler, getResultCount } from "./apiHandler";
import "./Result.css";
import { quizHandler } from "../Quiz/apiHandler";
import * as XLSX from 'xlsx';

export const Result = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [quizzes, setQuizzes] = useState([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 50,
  });
  const { showAlert } = useAlert();

  const recordsPerPageOptions = [50, 100, 200, 500, 1000];

 
  useEffect(() => {
    fetchQuizzes();
  }, []);
  
  useEffect(() => {
    fetchTotalCount();
  }, [filter]);

  useEffect(() => {
    fetchResults();
  }, [filter, pagination.currentPage, pagination.itemsPerPage]);


  
  const fetchQuizzes = async () => {
    const response = await quizHandler({}, "getQuizzes", setLoading, showAlert);
    if (response) {
      setQuizzes(response.data);
    }
  };

  const fetchTotalCount = async () => {
    const data = {
      quizId: filter !== "all" ? filter : null,
    };
    const response = await getResultCount(data, setLoading, showAlert);
    if (response && response.success) {
      setPagination((prev) => ({
        ...prev,
        totalItems: response.totalResults,
        totalPages: Math.ceil(response.totalResults / pagination.itemsPerPage),
      }));
    }
  };

  const fetchResults = async () => {
    const data = {
      quizId: filter !== "all" ? filter : null,
      page: pagination.currentPage,
      limit: pagination.itemsPerPage,
    };

    const response = await getResultsHandler(data, setLoading, showAlert);
    if (response && response.success) {
      setResults(response.results);
      setPagination((prev) => ({
        ...prev,
        totalPages: response.pagination.totalPages,
        totalItems: response.pagination.totalItems,
      }));
    }
  };

  const handlePageChange = (pageNumber) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: pageNumber,
    }));
  };

  const handleRecordsPerPageChange = (e) => {
    const newLimit = parseInt(e.target.value);
    setPagination((prev) => ({
      ...prev,
      itemsPerPage: newLimit,
      currentPage: 1, // Reset to first page when changing limit
      totalPages: Math.ceil(prev.totalItems / newLimit),
    }));
  };

  const renderPagination = () => {
    const items = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(
      1,
      pagination.currentPage - Math.floor(maxVisiblePages / 2)
    );
    let endPage = Math.min(
      pagination.totalPages,
      startPage + maxVisiblePages - 1
    );

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    items.push(
      <Pagination.Prev
        key="prev"
        disabled={pagination.currentPage === 1}
        onClick={() => handlePageChange(pagination.currentPage - 1)}
      />
    );

    // First page
    if (startPage > 1) {
      items.push(
        <Pagination.Item key={1} onClick={() => handlePageChange(1)}>
          1
        </Pagination.Item>
      );
      if (startPage > 2) items.push(<Pagination.Ellipsis key="ellipsis1" />);
    }

    // Page numbers
    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === pagination.currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    // Last page
    if (endPage < pagination.totalPages) {
      if (endPage < pagination.totalPages - 1)
        items.push(<Pagination.Ellipsis key="ellipsis2" />);
      items.push(
        <Pagination.Item
          key={pagination.totalPages}
          onClick={() => handlePageChange(pagination.totalPages)}
        >
          {pagination.totalPages}
        </Pagination.Item>
      );
    }

    // Next button
    items.push(
      <Pagination.Next
        key="next"
        disabled={pagination.currentPage === pagination.totalPages}
        onClick={() => handlePageChange(pagination.currentPage + 1)}
      />
    );

    return <Pagination>{items}</Pagination>;
  };

  const exportToExcel = () => {
    try {
      // Prepare data for export
      const exportData = results.map(result => ({
        'Name': result.UnverifiedUser?.name || 'N/A',
        'Email': result.UnverifiedUser?.email || 'N/A',
        'Age': result.UnverifiedUser?.age || 'N/A',
        'Quiz Type': result.type.toUpperCase(),
        'Result': getFormattedResult(result),
        'Date': new Date(result.createdAt).toLocaleString()
      }));

      // Create worksheet
      const ws = XLSX.utils.json_to_sheet(exportData);

      // Create workbook
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Quiz Results');

      // Generate filename with current date
      const fileName = `quiz_results_${new Date().toISOString().split('T')[0]}.xlsx`;

      // Save file
      XLSX.writeFile(wb, fileName);
      showAlert('Excel file exported successfully!', 'success');
    } catch (error) {
      console.error('Export error:', error);
      showAlert('Failed to export Excel file', 'error');
    }
  };

  const getFormattedResult = (result) => {
    if (result.type === 'iq') {
      return result.result?.label || 'N/A';
    } else if (result.type === 'personality') {
      return `Openness: ${result.result?.openness?.toFixed(1)}%, ` +
        `Neuroticism: ${result.result?.neuroticism?.toFixed(1)}%, ` +
        `Extraversion: ${result.result?.extraversion?.toFixed(1)}%, ` +
        `Agreeableness: ${result.result?.agreeableness?.toFixed(1)}%, ` +
        `Conscientiousness: ${result.result?.conscientiousness?.toFixed(1)}%`;
    } else if (result.type === 'creativity') {
      return result.result?.label || 'N/A';
    }
    return result.score || 'N/A';
  };

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "400px" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="result-admin-container">
      <div className="filters-container mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Quiz Results</h2>
          <Button 
            variant="success" 
            onClick={exportToExcel}
            className="export-button"
            disabled={results.length === 0}
          >
            <i className="bi bi-file-earmark-excel me-2"></i>
            Export to Excel
          </Button>
        </div>
        <div className="filters-wrapper mt-3">
          <Form.Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Quizzes</option>
            {quizzes.map((quiz) => (
              <option key={quiz.id} value={quiz.id}>
                {quiz.title}
              </option>
            ))}
          </Form.Select>

          <Form.Select
            value={pagination.itemsPerPage}
            onChange={handleRecordsPerPageChange}
            className="records-select"
          >
            {recordsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option} records per page
              </option>
            ))}
          </Form.Select>
        </div>
      </div>

      <div className="results-info mb-3">
        Showing {(pagination.currentPage - 1) * pagination.itemsPerPage + 1} to{" "}
        {Math.min(
          pagination.currentPage * pagination.itemsPerPage,
          pagination.totalItems
        )}{" "}
        of {pagination.totalItems} results
      </div>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Quiz Type</th>
            <th>Score/Result</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.UnverifiedUser?.name || "N/A"}</td>
              <td>{result.UnverifiedUser?.email || "N/A"}</td>
              <td>{result.UnverifiedUser?.age || "N/A"}</td>
              <td>{result.type.toUpperCase() || "N/A"}</td>
              <td>
                {result.type === 'iq' ? (
                  result.result?.label
                ) : result.type === 'personality' ? (
                  <div>
                    <div>Openness: {result.result?.openness?.toFixed(1)}%</div>
                    <div>Neuroticism: {result.result?.neuroticism?.toFixed(1)}%</div>
                    <div>Extraversion: {result.result?.extraversion?.toFixed(1)}%</div>
                    <div>Agreeableness: {result.result?.agreeableness?.toFixed(1)}%</div>
                    <div>Conscientiousness: {result.result?.conscientiousness?.toFixed(1)}%</div>
                  </div>
                ) : result.type === 'creativity' ? (
                  result.result?.label
                ) : (
                  result.score || 'N/A'
                )}
              </td>
              <td>{new Date(result.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="pagination-container">{renderPagination()}</div>
    </Container>
  );
};
