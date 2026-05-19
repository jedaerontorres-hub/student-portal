import { useState } from 'react'

function StudentForm() {
  const [name, setName] = useState('')

  const saveStudent = () => {
    alert(`Saved: ${name}`)
  }

  return (
    <section className="form-section">
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={saveStudent}>Save</button>
    </section>
  )
}

export default StudentForm