import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/glam /Header';
import Footer from './components/glam /Footer';
import Home from './pages/Home';
import Stock from './pages /Stock';
import Tests from './pages /Tests';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/tests" element={<Tests />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
