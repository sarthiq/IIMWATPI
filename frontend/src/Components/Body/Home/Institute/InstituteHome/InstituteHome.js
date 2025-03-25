import { collegeData } from '../instituteData';
import { Link } from 'react-router-dom';
import './InstituteHome.css';

export const InstituteHome = () => {
  return (
    <div className="institute">
      <h1 className="institute__title">Top Colleges in India</h1>
      <div className="institute__table-wrapper">
        <table className="institute__table">
          <thead className="institute__table-header">
            <tr>
              <th>ID</th>
              <th>College Name</th>
              <th>Courses</th>
              <th>Entrance Exams</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.map((college) => (
              <tr key={college.id} className="institute__table-row">
                <td className="institute__table-cell">{college.id}</td>
                <td className="institute__table-cell">{college.name}</td>
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
