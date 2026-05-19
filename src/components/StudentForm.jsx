// StudentForm.jsx

function StudentForm() {
  return (
    <section className="form-section">

      <h2>Add Student</h2>

      <form>

        <input type="text" placeholder="Full Name" />

        <input type="text" placeholder="Course" />

        <button type="submit">
          Add Student
        </button>

      </form>

    </section>
  )
}

export default StudentForm