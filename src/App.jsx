// App.jsx

import { useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
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
      studentNo: "202315224",
      name: "Laila Mea Almanzor",
      course: "BSIT",
      section: "3-1",
      status: "Active",
    },

    {
      id: 2,
      studentNo: "202315214",
      name: "Joyce Ann Francisco",
      course: "BSIT",
      section: "3-1",
      status: "Active",
    },

    {
      id: 3,
      studentNo: "202315225",
      name: "Jenna Jaspio",
      course: "BSIT",
      section: "3-1",
      status: "Active",
    },

    {
      id: 4,
      studentNo: "202315320",
      name: "Glen Lim",
      course: "BSIT",
      section: "3-1",
      status: "Active",
    },

    {
      id: 5,
      studentNo: "202315222",
      name: "Jed Aeron Torres",
      course: "BSIT",
      section: "3-1",
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

 const handleDeleteStudent = (studentNo) => {
  setStudents((prev) =>
    prev.map((student) =>
      student.studentNo === studentNo
        ? { ...student, status: "Deleted" }
        : student
    )
  );
  alert("Student deleted successfully!");
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

        <Dashboard students={students} />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <StudentTable
          students={filteredStudents}
          handleDelete={handleDeleteStudent}
        />

        <StudentForm
          handleAddStudent={handleAddStudent}
        />

      </div>

    </div>
  );
}