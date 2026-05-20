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
            📊 Dashboard
          </li>

          <li>
            👨‍🎓 Students
          </li>

          <li>
            📚 Courses
          </li>

          <li>
            👨‍🏫 Teachers
          </li>

          <li>
            📄 Reports
          </li>

          <li>
            ⚙ Settings
          </li>

        </ul>

      </div>

      <div className="sidebar-footer">
        CvSU Main Campus
      </div>

    </div>
  );
}