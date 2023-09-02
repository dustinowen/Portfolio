import "./App.css";

import Header from "./components/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="body">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
