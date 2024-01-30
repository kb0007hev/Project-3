import './App.css';

import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./pages/Home";

function App() {

  return (
    <section className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </section>
  )
}

export default App;