import './styles/App.css';
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>
  );
}

export default App;
