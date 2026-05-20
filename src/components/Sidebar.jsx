// components/Sidebar.jsx

export default function Sidebar() {

  return (
    <div className="sidebar">

      <div>

        <div className="logo">

          <h2>Student Portal System</h2>

        </div>

        <ul>

          <li className="active">
            <i className="bi bi-grid-fill"></i>
            Dashboard
          </li>

          <li>
            <i className="bi bi-people-fill"></i>
            Students
          </li>

          <li>
            <i className="bi bi-book-fill"></i>
            Courses
          </li>

          <li>
            <i className="bi bi-person-video3"></i>
            Teachers
          </li>

          <li>
            <i className="bi bi-file-earmark-text-fill"></i>
            Reports
          </li>

          <li>
            <i className="bi bi-gear-fill"></i>
            Settings
          </li>

        </ul>

      </div>

      <div className="sidebar-footer">
        New User
      </div>

    </div>
  );
}