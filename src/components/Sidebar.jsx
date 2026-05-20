// components/Sidebar.jsx

export default function Sidebar() {

  return (
    <div className="sidebar">

      <div>

        <div className="logo">
          <h2>SOMS</h2>
          <p>Student Portal</p>
        </div>

        <ul>

          <li className="active">
            Dashboard
          </li>

          <li>Students</li>

          <li>Courses</li>

          <li>Teachers</li>

          <li>Reports</li>

          <li>Settings</li>

        </ul>

      </div>

      <div className="sidebar-profile">

        <img
          src="https://i.pravatar.cc/50"
          alt=""
        />

        <div>
          <h4>Admin User</h4>
          <span>Administrator</span>
        </div>

      </div>

    </div>
  );
}