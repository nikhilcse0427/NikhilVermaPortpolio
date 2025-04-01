import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Project from './components/Project'
import Contact from './components/Contact'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
