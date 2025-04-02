import { useState } from 'react';
import { collegeData, allCategories } from '../instituteData';
import { Link } from 'react-router-dom';
import './InstituteHome.css';

export const InstituteHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const collegesPerPage = 10;

  const filteredColleges = selectedCategory === 'All' 
    ? collegeData 
    : collegeData.filter(college => 
        college.categories.includes(selectedCategory)
      );

  // Get current colleges
  const indexOfLastCollege = currentPage * collegesPerPage;
  const indexOfFirstCollege = indexOfLastCollege - collegesPerPage;
  const currentColleges = filteredColleges.slice(indexOfFirstCollege, indexOfLastCollege);

  // Calculate total pages
  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="institute">
      <h1 className="institute__title">Top Colleges in India</h1>
      
      <div className="institute__categories">
        <button 
          className={`institute__category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => {
            setSelectedCategory('All');
            setCurrentPage(1);
          }}
        >
          All
        </button>
        {allCategories.map((category) => (
          <button
            key={category}
            className={`institute__category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="institute__stats">
        <p>Showing {currentColleges.length} of {filteredColleges.length} colleges for {selectedCategory}</p>
      </div>

      <div className="institute__table-wrapper">
        <table className="institute__table">
          <thead className="institute__table-header">
            <tr>
              <th>ID</th>
              <th>College Name</th>
              <th>Categories</th>
              <th>Courses</th>
              <th>Entrance Exams</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentColleges.map((college, index) => (
              <tr key={index+1} className="institute__table-row">
                <td className="institute__table-cell">{indexOfFirstCollege + index + 1}</td>
                <td className="institute__table-cell">{college.name}</td>
                <td className="institute__table-cell">
                  <div className="institute__categories-tags">
                    {college.categories.map((category, index) => (
                      <span key={index} className="institute__category-tag">
                        {category}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="institute__table-cell">
                  <ul className="institute__list">
                    {college.courses.slice(0, 3).map((course, index) => (
                      <li key={index} className="institute__list-item">{course}</li>
                    ))}
                    {college.courses.length > 3 && <li className="institute__list-item">...</li>}
                  </ul>
                </td>
                <td className="institute__table-cell">
                  <ul className="institute__list">
                    {college.entranceExams.map((exam, index) => (
                      <li key={index} className="institute__list-item">{exam.name}</li>
                    ))}
                  </ul>
                </td>
                <td className="institute__table-cell">
                  {college.location.city}, {college.location.state}
                </td>
                <td className="institute__table-cell">
                  <Link 
                    to={`./route/${college.routes}`} 
                    className="institute__view-btn"
                  >
                    View More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="institute__pagination">
        <button 
          className="institute__pagination-btn"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map(number => (
          <button
            key={number}
            className={`institute__pagination-btn ${currentPage === number ? 'active' : ''}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
        <button 
          className="institute__pagination-btn"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
