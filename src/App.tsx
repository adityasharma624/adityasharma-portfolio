import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CompetitiveProgramming />
        <Projects />
        <Blog />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="container text-center text-gray-600">
          <p>© {new Date().getFullYear()} Aditya Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
