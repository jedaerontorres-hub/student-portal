export default function StudentTable({ students, handleDelete }) {
  return (
    <div className="table-container">

      <table className="student-table">

        <thead>
          <tr>
            <th>Student No</th>
            <th>Name</th>
            <th>Course</th>
            <th>Section</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>

              <td>{student.studentNo}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.section}</td>
              <td>{student.status}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(student.studentNo)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}