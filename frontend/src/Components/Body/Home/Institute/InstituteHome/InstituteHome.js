import { useState } from 'react';
import { collegeData, allCategories } from '../instituteData';
import { Link } from 'react-router-dom';
import './InstituteHome.css';

export const InstituteHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredColleges = selectedCategory === 'All' 
    ? collegeData 
    : collegeData.filter(college => 
        college.categories.includes(selectedCategory)
      );

  return (
    <div className="institute">
      <h1 className="institute__title">Top Colleges in India</h1>
      
      <div className="institute__categories">
        <button 
          className={`institute__category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {allCategories.map((category) => (
          <button
            key={category}
            className={`institute__category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="institute__stats">
        <p>Showing {filteredColleges.length} colleges for {selectedCategory}</p>
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
            {filteredColleges.map((college,index) => (
              <tr key={college.id} className="institute__table-row">
                <td className="institute__table-cell">{index + 1}</td>
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
    </div>
  );
};
