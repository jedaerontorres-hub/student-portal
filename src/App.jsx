// App.jsx

import './App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import StudentTable from './components/StudentTable'
import StudentForm from './components/StudentForm'

function App() {

  const students = [
    { id: 1, name: "Laila Almanzor", course: "BSIT" },
    { id: 2, name: "Joyce Ann Francisco", course: "BSCS" },
    { id: 3, name: "Jenna Jaspio", course: "BSIT" },
    { id: 4, name: "Glen Lim", course: "BSCS" },
    { id: 5, name: "Jed Aeron Torres", course: "BSIT" }
  ]

  return (
    <div className="container">

      <Sidebar />

      <main className="content">

        <Header />

        <div className="page-content">

          <Dashboard />

          <StudentTable students={students} />

          <StudentForm />

        </div>

      </main>

    </div>
  )
}

export default App