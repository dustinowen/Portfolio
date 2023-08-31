import './App.css';
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer';
import Home from './pages/Home'




export default function App() {
  return (
    <div className="body">
      {/* <Header /> */}
      <About />
      <Projects />
      <Footer />
      <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        {/* <Route exact path='/about' element={<About />} /> */}
        {/* <Route exact path='/projects' element={<Projects />} /> */}
      </Routes>


    </div>
  );
}

