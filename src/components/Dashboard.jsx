// components/DashboardCards.jsx

export default function Dashboard({ students }) {

  return (
    <div className="cards">

      <div className="card">
        <h2>{students.length}</h2>
        <p>Total Students</p>
      </div>

      <div className="card">
        <h2>4</h2>
        <p>Courses</p>
      </div>

      <div className="card">
        <h2>95%</h2>
        <p>Attendance</p>
      </div>

      <div className="card">
        <h2>12</h2>
        <p>Teachers</p>
      </div>

    </div>
  );
}