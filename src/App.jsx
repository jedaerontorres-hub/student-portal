// App.jsx

import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import SearchBar from "./components/SearchBar";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";
import Login from "./components/Login";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [search, setSearch] = useState("");

  const [students, setStudents] = useState([
    {
      id: 1,
      studentNo: "2025-001",
      name: "Juan Dela Cruz",
      course: "BSIT",
      section: "3A",
      status: "Active",
    },

    {
      id: 2,
      studentNo: "2025-002",
      name: "Maria Santos",
      course: "BSCS",
      section: "2B",
      status: "Active",
    },
  ]);

  const handleAddStudent = (newStudent) => {
    setStudents([
      ...students,
      {
        id: students.length + 1,
        ...newStudent,
      },
    ]);
  };

  const handleDelete = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <div className="app">

      <Sidebar />

      <div className="main-content">

        <Header />

        <DashboardCards students={students} />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <StudentTable
          students={filteredStudents}
          handleDelete={handleDelete}
        />

        <StudentForm
          handleAddStudent={handleAddStudent}
        />

      </div>

    </div>
  );
}