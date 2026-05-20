// components/StudentTable.jsx

export default function StudentTable({
  students,
  handleDelete,
}) {

  return (
    <div className="table-container">

      <table>

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

          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>

                <td>{student.studentNo}</td>

                <td>{student.name}</td>

                <td>{student.course}</td>

                <td>{student.section}</td>

                <td>
                  <span className="status">
                    {student.status}
                  </span>
                </td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      alert("Edit Feature Soon")
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(student.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                No students found.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}