// StudentTable.jsx

function StudentTable({ students }) {
  return (
    <section className="table-section">

      <div className="table-header">

        <h2>Student Records</h2>

        <div className="search-bar">
          <input type="text" placeholder="Search student..." />
        </div>

      </div>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </section>
  )
}

export default StudentTable