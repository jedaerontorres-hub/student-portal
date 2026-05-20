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

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt=""
          />

          <div>
            <h4>Admin User</h4>
            <span>Administrator</span>
          </div>
        </div>
      </div>

    </div>
  );
}