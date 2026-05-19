import { useState } from "react";

function StudentForm() {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    if (name === "" || course === "") {
      alert("Please fill in all fields!");
      return;
    }

    alert("Successfully Added Student!");

    // clear inputs after adding
    setName("");
    setCourse("");
  };

  return (
    <section className="form-section">

      <h2>Add Student</h2>

      <form onSubmit={handleSave}>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">
          Add Student
        </button>

      </form>

    </section>
  );
}

export default StudentForm; 