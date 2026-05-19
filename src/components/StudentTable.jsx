function StudentTable({ students }) {
  return (
    <section>
      <h2>Student Records</h2>

      <input
        type="text"
        placeholder="Search student..."
        className="search"
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default StudentTable