import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Section with id "${sectionId}" not found`);
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with id "${sectionId}" not found`);
      }
    }
  };

  return (
    <div className={`min-h-screen font-inter bg-gradient-custom text-${theme === 'dark' ? 'white' : 'gray-900'}`}>
      <Header toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;