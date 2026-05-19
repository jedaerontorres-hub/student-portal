import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    studentNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    course: "",
    yearSection: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (
      !formData.studentNumber ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.course ||
      !formData.yearSection
    ) {
      alert("Please fill in all required fields!");
      return;
    }

    alert("Successfully Added Student!");

    setFormData({
      studentNumber: "",
      firstName: "",
      middleName: "",
      lastName: "",
      course: "",
      yearSection: "",
      email: "",
      contact: "",
    });
  };

  return (
    <section className="form-section">
      <h2>Add Student</h2>

      <form onSubmit={handleSave}>
        <input
          type="text"
          name="studentNumber"
          placeholder="Student Number"
          value={formData.studentNumber}
          onChange={handleChange}
        />

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />

        <input
          type="text"
          name="yearSection"
          placeholder="Year & Section"
          value={formData.yearSection}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
        />

        <button type="submit">Add Student</button>
      </form>
    </section>
  );
}

export default StudentForm;