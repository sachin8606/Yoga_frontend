import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Accommodation from './pages/Accommodation';
import Workshops from './pages/Workshops';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import HowToReach from './pages/HowToReach';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/accommodation" element={<Accommodation />} />
                      <Route path="/workshops" element={<Workshops />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/how-to-reach" element={<HowToReach />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
