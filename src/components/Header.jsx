// components/Header.jsx

export default function Header() {

  return (
    <div className="header">

      <div>
        <h1>Student Management Dashboard</h1>
        <p>Welcome to CvSU Student Portal</p>
      </div>

      <div className="header-right">

        <button className="notification-btn">
          🔔
        </button>

        <button className="logout-btn">
          Logout
        </button>

      </div>

    </div>
  );
}