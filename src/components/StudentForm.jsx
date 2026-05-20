// components/StudentForm.jsx

import { useState } from "react";

export default function StudentForm({ handleAddStudent }) {
  const [form, setForm] = useState({
    studentNo: "",
    name: "",
    course: "",
    section: "",
    status: "Active",
  });

  const submitForm = (e) => {
    e.preventDefault();

    handleAddStudent(form);

    // ✅ SUCCESS ALERT
    alert("Student added successfully!");

    setForm({
      studentNo: "",
      name: "",
      course: "",
      section: "",
      status: "Active",
    });
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>

      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Student Number"
          value={form.studentNo}
          onChange={(e) =>
            setForm({ ...form, studentNo: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Course"
          value={form.course}
          onChange={(e) =>
            setForm({ ...form, course: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Section"
          value={form.section}
          onChange={(e) =>
            setForm({ ...form, section: e.target.value })
          }
          required
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}