import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
      {/* <section class="layout">
  <div class="header">1</div>
  <div class="leftSide">2</div>
  <div class="body">3</div>
  <div class="rightSide">4</div>
  <div class="footer">5</div> */}
{/* </section> */}
    </div>
  );
}

